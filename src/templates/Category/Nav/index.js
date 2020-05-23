import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

import { ArrowBack } from "styled-icons/boxicons-regular"

const Nav = ({ name }) => (
  <S.NavWrapper>
    <S.NavButtonBack>
      <ArrowBack />
    </S.NavButtonBack>
    <h2>{name}</h2>
  </S.NavWrapper>
)

Nav.propTypes = {
  name: PropTypes.string.isRequired,
}

export { Nav }
