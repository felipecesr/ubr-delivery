require('dotenv').config();
const { nanoid } = require('nanoid');
const fetch = require('node-fetch');
const fs = require('fs');
const { makeSlug, getUnique } = require('./utils');

const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEET_ID}/1/public/values?alt=json`;

async function getSheet(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const allItemsCategories = [];

    const commerce = [];

    data.feed.entry.forEach((item) => {
      allItemsCategories.push({
        id: nanoid(),
        name: item.gsx$escolhaacategoria.$t,
        slug: makeSlug(item.gsx$escolhaacategoria.$t),
      });
    });

    data.feed.entry.forEach((item) => {
      commerce.push({
        id: nanoid(),
        name: item.gsx$informeonomedoseuestabelecimento.$t,
        phone: [item.gsx$informeocontatoparaligação.$t],
        whatsapp: [item.gsx$informeocontatoparawhatsapp.$t],
        categories: [
          allItemsCategories.filter(
            (cat) => cat.name === item.gsx$escolhaacategoria.$t
          )[0].id,
        ],
        slug: makeSlug(item.gsx$informeonomedoseuestabelecimento.$t),
      });
    });

    const category = getUnique(allItemsCategories, 'slug');

    const content = { category, commerce };

    fs.writeFile(
      `${__dirname}/../../api/db/db.json`,
      JSON.stringify(content),
      function (error) {
        if (error) {
          console.log('Error:- ' + error);
          throw error;
        }
        console.log('done!!');
      }
    );
  } catch (error) {
    console.log('error', error);
  }
}

getSheet(googleSheetUrl);
