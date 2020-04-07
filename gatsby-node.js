const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type CategoryJson implements Node @dontInfer {
      slug: String!
      name: String!
      commerces: [CommerceJson] @link(by: "slug")
    }

    type CommerceJson implements Node @dontInfer {
      slug: String!
      name: String!
      phone: [String]
      whatsapp: [String]
      categories: [CategoryJson] @link(by: "slug")
    }
  `

  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allCategoryJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result =>
    result.data.allCategoryJson.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/templates/category.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  )
}
