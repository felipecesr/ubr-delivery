import React from "react"
import * as S from "./styles"

import Logo from "@components/Logo"

const Hero = () => (
  <S.HeroWrapper>
    <Logo />
    <S.HeroTitle>
      Fique em casa, <br />
      <strong>nós vamos até você</strong>!
    </S.HeroTitle>
    <S.HeroText>
      Nossa missão é reduzir a distância entre os comerciantes locais e os
      clientes em apenas alguns cliques.
    </S.HeroText>
  </S.HeroWrapper>
)

export default Hero
