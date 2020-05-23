import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

import { ArrowBack } from "styled-icons/boxicons-regular"

const Nav = ({ name }) => (
  <S.NavWrapper>
    <S.NavButtonBack to="/" cover direction="right" duration={1} bg="#ffb800">
      <ArrowBack />
    </S.NavButtonBack>
    <S.NavTitle>{name}</S.NavTitle>
  </S.NavWrapper>
)

Nav.propTypes = {
  name: PropTypes.string.isRequired,
}

export { Nav }
