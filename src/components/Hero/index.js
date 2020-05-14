import React from "react"
import * as S from "./styles"

import { Logo } from "../Logo"

const Hero = () => (
  <S.HeroWrapper>
    <Logo />
    <S.HeroTitle>
      Pare de <strong>sair de casa</strong>
    </S.HeroTitle>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
      laudantium?
    </p>
  </S.HeroWrapper>
)

export { Hero }
