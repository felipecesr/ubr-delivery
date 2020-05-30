import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from "./styled"

import { Home2 as Home } from "styled-icons/remix-line"
import { Search } from "styled-icons/boxicons-regular" // Moon
// import { GridOutline as Grid } from "styled-icons/evaicons-outline"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarNav>
      <S.MenuBarItem
        as={AniLink}
        cover
        to="/"
        direction="right"
        bg="#ffb800"
        duration={0.6}
        title="Página inicial"
      >
        <Home />
      </S.MenuBarItem>
      <S.MenuBarItem
        as={AniLink}
        cover
        to="/pesquisar"
        direction="left"
        bg="#ffb800"
        duration={0.6}
        title="Pesquisar"
      >
        <Search />
      </S.MenuBarItem>
      {/* <S.MenuBarItem>
        <Grid />
      </S.MenuBarItem> */}
      {/* <S.MenuBarItem>
        <Moon />
      </S.MenuBarItem> */}
    </S.MenuBarNav>
  </S.MenuBarWrapper>
)

export default MenuBar
