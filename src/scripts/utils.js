module.exports.makeSlug = function(val, replaceBy) {
  replaceBy = replaceBy || "-"
  let mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    A: /[\xC0-\xC6]/g,
    e: /[\xE8-\xEB]/g,
    E: /[\xC8-\xCB]/g,
    i: /[\xEC-\xEF]/g,
    I: /[\xCC-\xCF]/g,
    o: /[\xF2-\xF6]/g,
    O: /[\xD2-\xD6]/g,
    u: /[\xF9-\xFC]/g,
    U: /[\xD9-\xDC]/g,
    c: /\xE7/g,
    C: /\xC7/g,
    n: /\xF1/g,
    N: /\xD1/g,
  }

  for (let letra in mapaAcentosHex) {
    let expressaoRegular = mapaAcentosHex[letra]
    val = val.replace(expressaoRegular, letra)
  }

  val = val.toLowerCase()
  val = val.replace(/[^a-z0-9\-]/g, " ")

  val = val.replace(/ {2,}/g, " ")

  val = val.trim()
  val = val.replace(/\s/g, replaceBy)

  return val
}

module.exports.getUnique = function(arr, comp) {
  const unique = arr
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e])

  return unique
}

module.exports.openingHours = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "06:00",
    closes: "20:00",
  },
  {
    dayOfWeek: ["Sunday"],
    opens: "07:00",
    closes: "12:00",
  },
  {
    dayOfWeek: ["Sunday"],
    opens: "16:00",
    closes: "19:00",
  },
]

// 0 - 1440
// module.exports.hours = {
//   mon: { open: 570, close: 1080 },
//   tue: { open: 570, close: 1050 },
// }

// var d = new Date()
// var n = d.getDay()
// var now = d.getHours() + "." + d.getMinutes()
// var weekdays = [
//   ["Sunday", 9.3, 12.0, 15.3, 22.0],
//   ["Monday", 8.3, 12.0, 15.3, 19.0],
//   ["Tuesday", 8.3, 12.0, 15.3, 19.0],
//   ["Wednesday", 8.3, 12.0, 15.3, 19.0],
//   ["Thursday", 8.3, 12.0, 15.3, 19.0],
//   ["Friday", 8.3, 11.3],
//   ["Saturday"], // we are closed, sorry!
// ]
// var day = weekdays[n]

// if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
//   console.log("We're open right now!")
// } else {
//   console.log("Sorry, we're closed!")
// }

// const hours = {
//   Monday: { start: 1000, end: 1800 },
//   Tuesday: { start: 1400, end: 1800 },
//   Wednesday: { start: 1100, end: 1900 },
//   Thursday: { start: 1300, end: 1800 },
//   Friday: { start: 1000, end: 1700 },
//   Saturday: { start: 900, end: 1700 },
//   Sunday: {},
// }

// module.exports.weekdays = new Map([
//   ["sunday"],
//   ["monday", { open: 1000, close: 1800 }],
//   ["tuesday", { open: 1000, close: 1800 }],
//   ["wednesday", { open: 1000, close: 1800 }],
//   ["thursday", { open: 1000, close: 1800 }],
//   ["friday", { open: 1000, close: 1800 }],
//   ["saturday", { open: 1000, close: 1800 }],
// ])
