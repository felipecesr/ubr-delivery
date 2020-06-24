const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result =>
    result.data.allCategory.edges.forEach(({ node }) => {
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
