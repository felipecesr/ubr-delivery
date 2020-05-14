import React from "react"

import Layout from "../components/layout"
import { Search } from "../components/Search"
import { Container } from "../components/Container/styles"
import SEO from "../components/seo"

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="UBR Delivery" />
      <Container>
        <Search />
      </Container>
    </Layout>
  )
}

export default SearchPage
