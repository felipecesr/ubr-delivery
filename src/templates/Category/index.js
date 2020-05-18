import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import { Card } from "../../components/Card"
import { Container } from "../../components/Container/styles"
import { Nav } from "./Nav"

const Category = ({ data }) => {
  const [category] = data.allCategoryJson.edges

  return (
    <Layout>
      <Nav name={category.node.name} />
      {/* <Hero name={category.node.name} icon={category.node.slug} /> */}
      <Container as="section">
        {category.node.commerces.map(item => (
          <Card
            key={item.name}
            name={item.name}
            phone={item.phone}
            whatsapp={item.whatsapp}
            openingHours={item.openingHours}
          />
        ))}
      </Container>
    </Layout>
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
            phone
            whatsapp
            openingHours {
              dayOfWeek
              opens
              closes
            }
          }
        }
      }
    }
  }
`

export default Category
