import React from "react"
import * as S from "./styles"

import OpeningHour from "@components/OpeningHours"
import ContactButton from "./ContactButton"

const Card = ({ className, name, phone, whatsapp, openingHours }) => (
  <S.Card className={className}>
    <S.CardTitle>{name}</S.CardTitle>
    <OpeningHour weekRanges={openingHours} />
    {phone.length && phone[0] && (
      <S.ContactList>
        {phone.map((item, index) => (
          <S.ContactListItem key={index}>
            <ContactButton link={`tel:${item}`} icon="phone">
              {item}
            </ContactButton>
          </S.ContactListItem>
        ))}
      </S.ContactList>
    )}
    {whatsapp.length && whatsapp[0] && (
      <S.ContactList>
        {whatsapp.map((item, index) => (
          <S.ContactListItem key={index}>
            <ContactButton
              link={`https://api.whatsapp.com/send?phone=55${item}`}
              icon="whatsapp"
            >
              {item}
            </ContactButton>
          </S.ContactListItem>
        ))}
      </S.ContactList>
    )}
  </S.Card>
)

export default Card
