import Head from "next/head";
import { Logo } from "../components/Logo";
import { Grid } from "../components/Grid";
import data from "../_data/dev/sheet.json";

function getUnique(arr, comp) {
  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
}

const categories = getUnique(
  data.map(item => item.category),
  "slug"
);

const Home = () => (
  <>
    <Head>
      <title>UBR Delivery</title>
      <meta
        name="description"
        content="Reduzindo a distância entre os comerciantes e os clientes de Uruburetama"
      />
    </Head>
    <main className="container">
      <Logo />
      <Grid categories={categories} />
    </main>
  </>
);

export default Home;
