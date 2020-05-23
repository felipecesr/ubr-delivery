import React, { useState, useEffect } from "react"
import * as S from "./styles"

const OpeningHour = ({ openingHours }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const weekdays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ]

    const d = new Date()
    const n = d.getDay()
    const now = parseFloat(d.getHours() + "." + d.getMinutes())
    const today = openingHours[weekdays[n]]

    if (
      (now > today[0] && now < today[1]) ||
      (now > today[2] && now < today[3])
    ) {
      setIsOpen(true)
    }
  }, [openingHours])

  if (isOpen) {
    return (
      <S.OpeningHourWrapper>
        <S.isOpen>Aberto</S.isOpen>
      </S.OpeningHourWrapper>
    )
  }

  return (
    <S.OpeningHourWrapper>
      <S.isClosed>Fechado</S.isClosed>
    </S.OpeningHourWrapper>
  )
}

export { OpeningHour }
