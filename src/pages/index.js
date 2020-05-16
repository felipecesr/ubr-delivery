import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Hero } from "../components/Hero"
import { List } from "../components/List"
import { Container } from "../components/Container/styles"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allCategoryJson } = data

  return (
    <Layout>
      <SEO title="UBR Delivery" />
      <Hero />
      <Container>
        <List categories={allCategoryJson} />
      </Container>
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
          commerces {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
