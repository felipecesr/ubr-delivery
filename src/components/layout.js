import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "@styles/global"
import MenuBar from "@components/MenuBar"

const Layout = ({ children }) => (
  <>
    <main>
      <GlobalStyles />
      {children}
      <MenuBar />
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
