import React from "react"
import * as S from "./styles"

import { Whatsapp, Phone } from "styled-icons/icomoon"

const ContactButton = ({ link, icon, children }) => (
  <S.ContactButton href={link}>
    <S.ContactButtonIcon icon={icon}>
      {icon === "phone" ? <Phone /> : <Whatsapp />}
    </S.ContactButtonIcon>
    <span>{children}</span>
  </S.ContactButton>
)

export { ContactButton }
