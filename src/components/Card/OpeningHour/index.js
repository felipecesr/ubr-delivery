import React, { useState, useEffect } from "react"
import * as S from "./styles"

const getDayObject = arr => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const dayName = days[new Date().getDay()]

  const [dayOfWeek] = arr.filter(item =>
    item.dayOfWeek.find(name => name === dayName)
  )

  return dayOfWeek
}

const getHour = str => {
  return str.split(":")
}

const OpeningHour = ({ openingHours }) => {
  const [closes, setCloses] = useState("00:00")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const { opens, closes } = getDayObject(openingHours)

    setCloses(closes)

    const today = new Date()
    const now = Date.now()

    const condition =
      today.setHours(...getHour(opens)) < now &&
      today.setHours(...getHour(closes)) > now

    setIsOpen(condition)
  }, [openingHours])

  if (isOpen) {
    return (
      <S.OpeningHourWrapper>
        <S.isOpen>Aberto</S.isOpen>
        <span> - Fecha às {closes}</span>
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
