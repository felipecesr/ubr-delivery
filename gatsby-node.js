const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allUbrDeliveryCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result =>
    result.data.allUbrDeliveryCategory.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/templates/Category/index.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  )
}
