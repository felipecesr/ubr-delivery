import React from "react"
import * as S from "./styles"

import { Whatsapp, Phone } from "styled-icons/icomoon"

const ContactButton = ({ link, icon, children }) => (
  <S.ContactButton href={link}>
    <S.ContactButtonIcon>
      {icon === "phone" ? <Phone /> : <Whatsapp />}
    </S.ContactButtonIcon>
    <S.ContactButtonText>{children}</S.ContactButtonText>
  </S.ContactButton>
)

export { ContactButton }
