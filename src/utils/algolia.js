const commerceQuery = `{
  commerces: allCommerce {
    edges {
      node {
        objectID: slug
        name
        phone
        whatsapp
        openingHours {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
        categories {
          name
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(
    ({
      node: { objectID, name, phone, whatsapp, openingHours, categories },
    }) => ({
      objectID,
      name,
      phone,
      whatsapp,
      openingHours,
      categories: categories.map(category => category.name),
    })
  )

const queries = [
  {
    query: commerceQuery,
    transformer: ({ data }) => flatten(data.commerces.edges),
    indexName: `Commerces`,
  },
]

module.exports = queries
