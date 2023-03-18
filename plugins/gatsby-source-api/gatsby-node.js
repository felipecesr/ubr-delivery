const fetch = require("node-fetch")
const createNodeHelpers = require("gatsby-node-helpers").default

const { processCommerce } = require("./utils/processor")
const { makeSlug, getUnique } = require("./utils")

const getData = async (googleSheetID, googleSheetAPIKey) => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${googleSheetID}/values/Respostas%20do%20Formul%C3%A1rio%201?alt=json&key=${googleSheetAPIKey}`
  )
  const data = await response.json()
  data.values.shift()
  data.values.pop()
  return data.values
}

exports.sourceNodes = async ({ actions, createNodeId }, pluginOptions) => {
  const { createNode } = actions
  const { createNodeFactory } = createNodeHelpers({
    typePrefix: `UbrDelivery`,
  })

  const prepareCommerceNode = createNodeFactory(`Commerce`)
  const prepareCategoryNode = createNodeFactory(`Category`)

  const data = await getData(
    pluginOptions.googleSheetID,
    pluginOptions.googleSheetAPIKey
  )
  const commerces = data.map(processCommerce)

  let categories = []

  data.forEach(item => {
    item[2].split(", ").forEach(name => {
      categories.push({
        name,
        slug: makeSlug(name),
      })
    })
  })

  categories = getUnique(categories, "slug")
  categories.forEach(cat => {
    const categoryCommerces = commerces
      .filter(cmc => cmc.categories.includes(cat.slug))
      .map(cmc => cmc.slug)
    cat.commerces = categoryCommerces
  })

  const commerceNodes = commerces.map(commerce =>
    prepareCommerceNode(commerce, {
      id: createNodeId(commerce.slug),
    })
  )
  const categoryNodes = categories.map(category =>
    prepareCategoryNode(category, {
      id: createNodeId(category.slug),
    })
  )

  commerceNodes.forEach(node => createNode(node))
  categoryNodes.forEach(node => createNode(node))

  return
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type UbrDeliveryCategory implements Node @dontInfer {
      slug: String!
      name: String!
      commerces: [UbrDeliveryCommerce] @link(by: "slug")
    }

    type UbrDeliveryCommerce implements Node @dontInfer {
      slug: String!
      name: String!
      phone: [String]
      whatsapp: [String]
      openingHours: WeekDay
      categories: [UbrDeliveryCategory] @link(by: "slug")
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
