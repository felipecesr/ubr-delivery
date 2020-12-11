import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "@components/layout"
import SEO from "@components/seo"
import { ContainerCategory } from "@components/Container/styles"
import Nav from "@components/Nav"
import Card from "@components/Card"
import { spacing } from "@styles/tokens"

export const CardWrapper = styled(Card)`
  margin-top: ${spacing.md};

  &:first-child {
    margin-top: 0;
  }
`

const Category = ({ data }) => {
  const [category] = data.allUbrDeliveryCategory.nodes

  return (
    <Layout>
      <SEO title={category.name} lang="pt-br" />
      <Nav name={category.name} />
      <ContainerCategory as="section">
        {category.commerces.map(item => (
          <CardWrapper
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
      nodes {
        name
        slug
        commerces {
          name
          phone
          whatsapp
          openingHours {
            close
            open
          }
        }
      }
    }
  }
`

export default Category
