import Head from 'next/head';
import { Logo } from '../components/Logo';
import { Grid } from '../components/Grid';
import { CategoryTitle } from '../components/CategoryTitle/styles';
import { categories } from '../utils/categories';

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
      <CategoryTitle>Categorias</CategoryTitle>
      <Grid categories={categories} />
    </main>
  </>
);

export default Home;
