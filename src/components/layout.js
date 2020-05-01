import React from "react"
import PropTypes from "prop-types"

import { Container } from "./Container/styles"
import GlobalStyles from "../styles/global"

import PageHeader from "./PageHeader"

const Layout = ({ children }) => (
  <>
    <PageHeader />
    <main>
      <GlobalStyles />
      <Container>{children}</Container>
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
