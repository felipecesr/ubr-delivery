import React from "react"
import * as S from "./styles"

const ContactButton = ({ link, icon, text }) => (
  <S.ContactButton>
    <S.ContactButtonLink href={link}>
      <S.ContactButtonIcon className="icon">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`icons.svg#${icon}`}
        />
      </S.ContactButtonIcon>
      <span>{text}</span>
    </S.ContactButtonLink>
  </S.ContactButton>
)

export { ContactButton }
