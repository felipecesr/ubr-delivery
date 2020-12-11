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

  if (today === undefined || today.length === 0) {
    return <p>não há informações de horários</p>
  }

  if (currentHour < today[0].open) {
    return <p>Fechado - Abre às {timeConvert(today[0].open)}</p>
  }

  if (currentHour < today[0].close) {
    let text = `Aberto - Fecha às ${timeConvert(today[0].close)}`
    if (today.length > 1) text += ` - Reabre às ${timeConvert(today[1].open)}`
    return <p>{text}</p>
  }

  if (
    !!today[1] &&
    currentHour > today[1].open &&
    currentHour < today[1].close
  ) {
    return <p>Aberto - Fecha às {timeConvert(today[1].close)}</p>
  }

  const lastHour = today.length

  if (!!!weekRanges[dayIndex + 1] && !weekRanges[0].length) {
    if (currentHour > today[lastHour - 1].close) {
      return (
        <p>Fechado - Abre segunda às {timeConvert(weekRanges[1][0].open)}</p>
      )
    }
  }

  if (!!!weekRanges[dayIndex + 1] && weekRanges[0].length) {
    if (currentHour > today[lastHour - 1].close) {
      return <p>Fechado - Abre às {timeConvert(weekRanges[0][0].open)}</p>
    }
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
