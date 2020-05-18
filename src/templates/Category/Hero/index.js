import React from "react"
import PropTypes from "prop-types"
import * as S from "./styles"

const Hero = ({ name, icon }) => (
  <S.HeroWrapper>
    <S.HeroContainer>
      <S.HeroIcon name={icon} size={{ width: 64, height: 64 }} />
      <S.HeroTitle>{name}</S.HeroTitle>
    </S.HeroContainer>
  </S.HeroWrapper>
)

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export { Hero }
