import React, { useState, useEffect } from "react"
import * as S from "./styles"

const OpeningHour = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const d = new Date()
    const now = parseFloat(d.getHours() + "." + d.getMinutes())

    if ((now > day[0] && now < day[1]) || (now > day[2] && now < day[3])) {
      setIsOpen(true)
    }
  }, [day])

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

OpeningHour.defaultProps = {
  today: [],
}

export default OpeningHour
