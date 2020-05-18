import React from "react"
import * as S from "./styles"

import { ContactButton } from "./ContactButton"

const Card = ({ name, phone, whatsapp }) => (
  <S.Card>
    <S.CardTitle>{name}</S.CardTitle>
    <S.ContactList>
      {phone.map((item, index) => (
        <li key={index}>
          <ContactButton link={`tel:${item}`} icon="phone">
            {item}
          </ContactButton>
        </li>
      ))}
    </S.ContactList>
    <S.ContactList>
      {whatsapp.map((item, index) => (
        <li key={index}>
          <ContactButton
            link={`https://api.whatsapp.com/send?phone=55${item}`}
            icon="whatsapp"
          >
            {item}
          </ContactButton>
        </li>
      ))}
    </S.ContactList>
  </S.Card>
)

export { Card }
