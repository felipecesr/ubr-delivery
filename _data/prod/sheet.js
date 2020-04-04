require("dotenv").config();
const fetch = require("node-fetch");
const fs = require("fs");
const { makeSlug } = require("../utils");

const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEET_ID}/1/public/values?alt=json`;

async function getSheet(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const content = [];

    data.feed.entry.forEach(item => {
      content.push({
        category: {
          name: item.gsx$escolhaacategoria.$t,
          slug: makeSlug(item.gsx$escolhaacategoria.$t)
        },
        name: item.gsx$informeonomedoseuestabelecimento.$t,
        phone: item.gsx$informeocontatoparaligação.$t,
        whatsapp: item.gsx$informeocontatoparawhatsapp.$t
      });
    });

    fs.writeFile(
      `${__dirname}/../dev/sheet.json`,
      JSON.stringify(content),
      function(error) {
        if (error) {
          console.log("Error:- " + error);
          throw error;
        }
        console.log("done!!");
      }
    );
  } catch (error) {
    console.log("error", error);
  }
}

getSheet(googleSheetUrl);
