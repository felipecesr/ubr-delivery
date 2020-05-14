const commerceQuery = `{
  commerces: allCommerceJson {
    edges {
      node {
        objectID: slug
        name
        phone
        whatsapp
        categories {
          name
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { objectID, name, phone, whatsapp, categories } }) => ({
    objectID,
    name,
    phone,
    whatsapp,
    categories: categories.map(category => category.name),
  }))

const queries = [
  {
    query: commerceQuery,
    transformer: ({ data }) => flatten(data.commerces.edges),
    indexName: `Commerces`,
  },
]

module.exports = queries
