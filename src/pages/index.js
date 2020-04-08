import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allCategoryJson } = data

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <ul>
        {allCategoryJson.edges.map(edge => (
          <li>
            <Link to={`/${edge.node.slug}`}>{edge.node.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allCategoryJson {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`

export default IndexPage
