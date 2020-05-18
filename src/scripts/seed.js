require("dotenv").config()
const fetch = require("node-fetch")
const fs = require("fs")
const { makeSlug, getUnique, openingHours } = require("./utils")

const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEET_ID}/1/public/values?alt=json`

const makeFile = (filename, content) => {
  fs.writeFile(
    `${__dirname}/../data/${filename}.json`,
    JSON.stringify(content),
    function(error) {
      if (error) {
        console.log("Error:- " + error)
        throw error
      }
      console.log("done!!")
    }
  )
}

async function getSheet(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()

    let categories = []
    const commerces = []

    data.feed.entry.forEach(item => {
      item.gsx$escolhaacategoria.$t.split(", ").forEach(name => {
        categories.push({
          name,
          slug: makeSlug(name),
        })
      })

      commerces.push({
        slug: makeSlug(item.gsx$informeonomedoseuestabelecimento.$t),
        name: item.gsx$informeonomedoseuestabelecimento.$t,
        phone: item.gsx$informeocontatoparaligação.$t
          .split("/")
          .map(item => item.replace("-", "")),
        whatsapp: item.gsx$informeocontatoparawhatsapp.$t
          .split("/")
          .map(item => item.replace("-", "")),
        openingHours,
        categories: item.gsx$escolhaacategoria.$t
          .split(", ")
          .map(cat => makeSlug(cat)),
      })
    })

    categories = getUnique(categories, "slug")
    categories.forEach(cat => {
      const categoryCommerces = commerces
        .filter(cmc => cmc.categories.includes(cat.slug))
        .map(cmc => cmc.slug)
      cat.commerces = categoryCommerces
    })

    makeFile("commerce", commerces)
    makeFile("category", categories)
  } catch (error) {
    console.log("error", error)
  }
}

getSheet(googleSheetUrl)
