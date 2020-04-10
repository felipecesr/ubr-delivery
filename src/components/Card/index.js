import React from "react"
import { ContactButton } from "../ContactButton"
import * as S from "./styles"

const Card = ({ name, phone, whatsapp }) => (
  <S.Card>
    <S.CardTitle>{name}</S.CardTitle>
    <S.ContactList>
      <ContactButton link={`tel:${phone}`} icon="phone" text="Celular" />
      {whatsapp && (
        <ContactButton
          link={`https://api.whatsapp.com/send?phone=55${whatsapp}`}
          icon="whatsapp"
          text="Whatsapp"
        />
      )}
    </S.ContactList>
  </S.Card>
)

export { Card }
