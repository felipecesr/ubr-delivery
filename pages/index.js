import Head from 'next/head';
import fetch from 'node-fetch';
import { Logo } from '../components/Logo';
import { Grid } from '../components/Grid';
import { CategoryTitle } from '../components/CategoryTitle/styles';

const Home = ({ categories }) => (
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
      <CategoryTitle>Categorias</CategoryTitle>
      <Grid categories={categories} />
    </main>
  </>
);

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'post',
    body: JSON.stringify({ query: '{ categories { name slug } }' }),
    headers: { 'Content-Type': 'application/json' },
  });
  const {
    data: { categories },
  } = await res.json();

  return { props: { categories } };
}

export default Home;
