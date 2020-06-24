const { makeSlug } = require(".")
const { openingHours } = require("./opening-hours")

module.exports.processCommerce = item => ({
  slug: makeSlug(item.gsx$informeonomedoseuestabelecimento.$t),
  name: item.gsx$informeonomedoseuestabelecimento.$t,
  phone: item.gsx$informeocontatoparaligação.$t
    .split("/")
    .map(item => item.replace("-", "")),
  whatsapp: item.gsx$informeocontatoparawhatsapp.$t
    .split("/")
    .map(item => item.replace("-", "")),
  openingHours: openingHours(
    item.gsx$semana.$t,
    item.gsx$sabado.$t,
    item.gsx$domingo.$t
  ),
  categories: item.gsx$escolhaacategoria.$t
    .split(", ")
    .map(cat => makeSlug(cat)),
})

module.exports.processCategory = item => {
  const categories = []

  item.gsx$escolhaacategoria.$t.split(", ").forEach(name => {
    categories.push({
      name,
      slug: makeSlug(name),
    })
  })

  return categories
}
