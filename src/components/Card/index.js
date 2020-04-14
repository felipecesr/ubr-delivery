import React from "react"
import * as S from "./styles"

import { ContactButton } from "./ContactButton"
import { OpeningHour } from "./OpeningHour"

const Card = ({ name, phone, whatsapp, openingHours }) => (
  <S.Card>
    <S.CardTitle>{name}</S.CardTitle>
    {openingHours && <OpeningHour openingHours={openingHours} />}
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

Card.defaultProps = {
  openingHours: false,
}

export { Card }
