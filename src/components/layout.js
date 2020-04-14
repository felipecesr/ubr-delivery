import React from "react"
import PropTypes from "prop-types"

import { Container } from "./Container/styles"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => (
  <main>
    <GlobalStyles />
    <Container>{children}</Container>
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
