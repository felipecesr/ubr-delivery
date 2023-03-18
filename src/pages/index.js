import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import Hero from "@components/Hero"
import List from "@components/List"
import { Container } from "@components/Container/styles"
import SEO from "@components/seo"

const IndexPage = ({ data }) => {
  const { allUbrDeliveryCategory } = data

  return (
    <Layout>
      <SEO title="Home" lang="pt-br" />
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5280470753698453"
        data-ad-slot="7768167977"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script
        dangerouslySetInnerHTML={{
          __html: " (adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
      <Hero />
      <Container>
        <List categories={allUbrDeliveryCategory} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allUbrDeliveryCategory {
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
