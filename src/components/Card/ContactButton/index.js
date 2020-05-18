import React from "react"
import * as S from "./styles"

const ContactButton = ({ link, icon, children }) => (
  <S.ContactButton href={link}>
    <S.ContactButtonIcon />
    <span>{children}</span>
  </S.ContactButton>
  // <S.ContactButton>
  //   <S.ContactButtonLink href={link}>
  //     <S.ContactButtonIcon>
  //       {icon === "whatsapp" ? <Whatsapp /> : <PhoneAlt />}
  //     </S.ContactButtonIcon>
  //     <span>{text}</span>
  //   </S.ContactButtonLink>
  // </S.ContactButton>
)

export { ContactButton }
