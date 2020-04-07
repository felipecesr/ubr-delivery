import React from "react"
import { graphql } from "gatsby"

const Category = ({ data }) => {
  const [category] = data.allCategoryJson.edges

  return (
    <>
      <h1>{category.node.name}</h1>
      <ul>
        {category.node.commerces.map(commerce => (
          <li key={commerce.name}>{commerce.name}</li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  query Category($slug: String!) {
    allCategoryJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          name
          slug
          commerces {
            name
          }
        }
      }
    }
  }
`

export default Category
