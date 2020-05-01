import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

import ToggleTheme from "./ToggleTheme"

const PageHeader = () => (
  <S.PageHeaderWrapper>
    <S.PageHeaderTitle>
      <Link to="/">UBR Delivery</Link>
    </S.PageHeaderTitle>
    <ToggleTheme />
  </S.PageHeaderWrapper>
)

export default PageHeader
