import React from "react"
import { Link } from "gatsby"
import * as S from "./styled"

import { Home2 as Home } from "styled-icons/remix-line"
import { Search, Moon } from "styled-icons/boxicons-regular"
import { GridOutline as Grid } from "styled-icons/evaicons-outline"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarNav>
      <S.MenuBarItem as={Link} to="/" title="Página inicial">
        <Home />
      </S.MenuBarItem>
      <S.MenuBarItem as={Link} to="/pesquisa" title="Pesquisar">
        <Search />
      </S.MenuBarItem>
      <S.MenuBarItem>
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem>
        <Moon />
      </S.MenuBarItem>
    </S.MenuBarNav>
  </S.MenuBarWrapper>
)

export { MenuBar }
