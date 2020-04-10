import React from "react"
import * as S from "./styles"

import { Whatsapp } from "styled-icons/remix-fill"
import { PhoneAlt } from "styled-icons/fa-solid"

const ContactButton = ({ link, icon, text }) => (
  <S.ContactButton>
    <S.ContactButtonLink href={link}>
      <S.ContactButtonIcon>
        {icon === "whatsapp" ? <Whatsapp /> : <PhoneAlt />}
      </S.ContactButtonIcon>
      <span>{text}</span>
    </S.ContactButtonLink>
  </S.ContactButton>
)

export { ContactButton }
