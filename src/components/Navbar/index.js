import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

const Navbar = ({ menu }) => (
  <S.Navbar>
    <ul>
      {menu.map(item => (
        <li key={item.node.slug}>
          <Link to={`/${item.node.slug}`}>{item.node.name}</Link>
        </li>
      ))}
    </ul>
  </S.Navbar>
)

export { Navbar }
