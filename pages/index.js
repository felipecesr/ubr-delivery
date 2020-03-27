import Head from 'next/head';
import { Category } from '../components/Category';
import { categories } from '../api/categories';

const Home = () => (
  <div className="container">
    <main>
      <h1 className="title">Uruburetama Delivery</h1>
      <div className="container">
        {categories.map(category => (
          <Category key={category.name} category={category} />
        ))}
      </div>
    </main>
  </div>
);

export default Home;
