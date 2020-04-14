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
