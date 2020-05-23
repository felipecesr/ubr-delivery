module.exports.openingHours = function(weekdays, saturday, sunday) {
  const weekdaysData = format(weekdays)
  const saturdayData = format(saturday)
  const sundayData = format(sunday)

  function parseTime(timeString) {
    return parseFloat(timeString.replace(":", "."))
  }

  function format(data) {
    if (!data) return []
    return data.split(/[,-]/).map(parseTime)
  }

  return {
    monday: weekdaysData,
    tuesday: weekdaysData,
    wednesday: weekdaysData,
    thursday: weekdaysData,
    friday: weekdaysData,
    saturday: saturdayData,
    sunday: sundayData,
  }
}
