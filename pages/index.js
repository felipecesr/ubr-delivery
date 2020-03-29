import Head from "next/head";
import { Category } from "../components/Category";
import data from "../_data/dev/sheet.json";

const Home = () => {
  const categories = [...new Set(data.map(item => item.category))].sort();

  return (
    <>
      <Head>
        <title>UBR Delivery</title>
        <meta
          name="description"
          content="Reduzindo a distância entre os comerciantes e os clientes de Uruburetama"
        />
      </Head>
      <main className="container">
        <h1 className="title">Uruburetama Delivery</h1>
        {categories.map(category => (
          <Category key={category} category={category} />
        ))}
      </main>
    </>
  );
};

export default Home;
