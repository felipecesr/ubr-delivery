import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Logo } from "../components/Logo"
import { Grid } from "../components/Grid"
import { CategoryTitle } from "../components/CategoryTitle/styles"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allCategoryJson } = data

  return (
    <Layout>
      <SEO title="UBR Delivery" />
      <Logo />
      <CategoryTitle>Categorias</CategoryTitle>
      <Grid categories={allCategoryJson} />
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
