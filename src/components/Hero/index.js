import React from "react"
import * as S from "./styles"

import { Logo } from "../Logo"

const Hero = () => (
  <S.HeroWrapper>
    <Logo />
    <S.HeroTitle>
      Fique em casa, <strong>nós vamos até você</strong>!
    </S.HeroTitle>
    <p>
      Nossa missão é reduzir a distância entre os comerciantes locais e os
      clientes em apenas alguns cliques.
    </p>
  </S.HeroWrapper>
)

export { Hero }
