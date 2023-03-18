const { makeSlug } = require(".")
const { openingHours } = require("./opening-hours")

module.exports.processCommerce = item => ({
  slug: makeSlug(item[1]),
  name: item[1],
  phone: [item[3]],
  whatsapp: [item[4]],
  openingHours: openingHours(item[15], item[16], item[17]),
  categories: item[2] && item[2].split(", ").map(cat => makeSlug(cat)),
})

module.exports.processCategory = item => {
  const categories = []

  item[2].split(", ").forEach(name => {
    categories.push({
      name,
      slug: makeSlug(name),
    })
  })

  return categories
}
