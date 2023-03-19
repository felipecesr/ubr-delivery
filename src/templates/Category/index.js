import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import { ContainerCategory } from "@components/Container/styles"
import Nav from "@components/Nav"
import * as S from "./styled"

const Category = ({ data }) => {
  const [category] = data.allUbrDeliveryCategory.edges

  return (
    <Layout>
      <SEO title={category.node.name} lang="pt-br" />
      <Nav name={category.node.name} />
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
      <ContainerCategory as="section">
        {category.node.commerces.map(item => (
          <S.CardWrapper
            key={item.name}
            name={item.name}
            phone={item.phone}
            whatsapp={item.whatsapp}
            openingHours={item.openingHours}
          />
        ))}
      </ContainerCategory>
    </Layout>
  )
}

export const query = graphql`
  query Category($slug: String!) {
    allUbrDeliveryCategory(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          name
          slug
          commerces {
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
          }
        }
      }
    }
  }
`

export default Category
