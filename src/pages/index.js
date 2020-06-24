import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Hero from "@components/Hero"
import List from "@components/List"
import { Container } from "@components/Container/styles"
import SEO from "@components/seo"

const IndexPage = ({ data }) => {
  const { allCategory } = data

  return (
    <Layout>
      <SEO title="Home" lang="pt-br" />
      <Hero />
      <Container>
        <List categories={allCategory} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allCategory {
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
