import React from "react"
import { ContactButton } from "../ContactButton"
import * as S from "./styles"

const Card = ({ name, phone, whatsapp }) => (
  <S.Card>
    <S.CardTitle>{name}</S.CardTitle>
    <S.ContactList>
      <ContactButton link={`tel:${phone[0]}`} icon="phone" text="Celular" />
      {whatsapp.length && (
        <ContactButton
          link={`https://api.whatsapp.com/send?phone=55${whatsapp[0]}`}
          icon="whatsapp"
          text="Whatsapp"
        />
      )}
    </S.ContactList>
  </S.Card>
)

export { Card }
