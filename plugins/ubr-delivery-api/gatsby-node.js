require("dotenv").config()
const fetch = require("node-fetch")

const { processCommerce } = require("./utils/processor")
const { makeSlug, getUnique } = require("./utils")

const COMMERCE_NODE_TYPE = `Commerce`
const CATEGORY_NODE_TYPE = `Category`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const response = await fetch(
    `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEET_ID}/1/public/values?alt=json`
  )
  const data = await response.json()
  const commercesProccessed = data.feed.entry.map(processCommerce)

  let categories = []

  data.feed.entry.forEach(item => {
    item.gsx$escolhaacategoria.$t.split(", ").forEach(name => {
      categories.push({
        name,
        slug: makeSlug(name),
      })
    })
  })

  categories = getUnique(categories, "slug")
  categories.forEach(cat => {
    const categoryCommerces = commercesProccessed
      .filter(cmc => cmc.categories.includes(cat.slug))
      .map(cmc => cmc.slug)
    cat.commerces = categoryCommerces
  })

  commercesProccessed.forEach(commerce =>
    createNode({
      ...commerce,
      id: createNodeId(`${COMMERCE_NODE_TYPE}-${commerce.slug}`),
      parent: null,
      children: [],
      internal: {
        type: COMMERCE_NODE_TYPE,
        content: JSON.stringify(commerce),
        contentDigest: createContentDigest(commerce),
      },
    })
  )

  categories.forEach(category =>
    createNode({
      ...category,
      id: createNodeId(`${CATEGORY_NODE_TYPE}-${category.slug}`), // hashes the inputs into an ID
      parent: null,
      children: [],
      internal: {
        type: CATEGORY_NODE_TYPE,
        content: JSON.stringify(category),
        contentDigest: createContentDigest(category),
      },
    })
  )

  return
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Category implements Node @dontInfer {
      slug: String!
      name: String!
      commerces: [Commerce] @link(by: "slug")
    }

    type Commerce implements Node @dontInfer {
      slug: String!
      name: String!
      phone: [String]
      whatsapp: [String]
      openingHours: WeekDay
      categories: [Category] @link(by: "slug")
    }

    type WeekDay @dontInfer {
      monday: [Float],
      tuesday: [Float],
      wednesday: [Float],
      thursday: [Float],
      friday: [Float],
      saturday: [Float],
      sunday: [Float]
    }
  `

  createTypes(typeDefs)
}

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")
