import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../styles/global"

const Layout = ({ children }) => (
  <>
    <main>
      <GlobalStyles />
      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
