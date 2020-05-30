import React, { useMemo } from "react"
import * as S from "./styles"

import ContactButton from "./ContactButton"
import OpeningHour from "./OpeningHour"

const Card = ({ className, name, phone, whatsapp, openingHours }) => {
  const today = useMemo(() => {
    const weekdays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ]

    const date = new Date()
    const dayNumber = date.getDay()

    return openingHours[weekdays[dayNumber]]
  }, [openingHours])

  return (
    <S.Card className={className}>
      <S.CardTitle>{name}</S.CardTitle>
      {!!today.length && <OpeningHour day={today} />}
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
}

export default Card
