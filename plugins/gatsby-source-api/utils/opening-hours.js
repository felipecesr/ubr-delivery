module.exports.openingHours = function(weekdays, saturday, sunday) {
  const weekdaysData = format(weekdays)
  const saturdayData = format(saturday)
  const sundayData = format(sunday)

  function parseTime(timeString) {
    const [hours, minutes] = timeString.split(":")
    return +minutes + +hours * 60
  }

  function format(data) {
    if (!data) return []
    const times = data.split(/[;-]/).map(parseTime)

    if (times.length > 2) {
      return [
        { open: times[0], close: times[1] },
        { open: times[2], close: times[3] },
      ]
    }

    return [{ open: times[0], close: times[1] }]
  }

  return [
    sundayData,
    weekdaysData,
    weekdaysData,
    weekdaysData,
    weekdaysData,
    weekdaysData,
    saturdayData,
  ]
}
