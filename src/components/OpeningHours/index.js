import React, { useMemo } from "react"
import PropTypes from "prop-types"

function pad2(number) {
  return (number < 10 ? "0" : "") + number
}

const OpeningHours = ({ weekRanges }) => {
  const date = new Date(Date.now())
  const dayIndex = date.getDay()

  const today = weekRanges[dayIndex]

  const timeConvert = num => {
    const hours = Math.floor(num / 60)
    const minutes = num % 60
    return `${pad2(hours)}:${pad2(minutes)}`
  }

  const currentHour = useMemo(() => {
    const date = new Date(Date.now())
    return date.getMinutes() + date.getHours() * 60
  }, [])

  if (currentHour < today[0].close) {
    let text = `Aberto - Fecha às ${timeConvert(today[0].close)}`
    if (today.length > 1) text += ` - Reabre às ${timeConvert(today[1].open)}`
    return <p>{text}</p>
  }

  return (
    <p>
      Fechado - Abre às{" "}
      {!!today[1] ? timeConvert(today[1].open) : timeConvert(today[0].open)}
    </p>
  )
}

OpeningHours.propTypes = {
  weekRanges: PropTypes.array.isRequired,
}

export default OpeningHours
