import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import { Logo } from "../../components/Logo"
import { Card } from "../../components/Card"
import { CategoryTitle } from "../../components/CategoryTitle/styles"
import { Icon } from "../../components/Icon/styles"

const Category = ({ data }) => {
  const [category] = data.allCategoryJson.edges

  return (
    <Layout>
      <Logo />
      <section>
        <CategoryTitle>
          <Link to="/">
            <Icon />
          </Link>
          {category.node.name}
        </CategoryTitle>
        {category.node.commerces.map(item => (
          <Card
            key={item.name}
            name={item.name}
            phone={item.phone}
            whatsapp={item.whatsapp}
            openingHours={item.openingHours}
          />
        ))}
      </section>
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
