import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allCategoryJson } = useStaticQuery(graphql`
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
  `)

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

export default IndexPage
