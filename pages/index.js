import { Category } from '../components/Category';
import { categories } from '../api/categories';

const Home = () => (
  <main className="container">
    <h1 className="title">Uruburetama Delivery</h1>
    <div className="container">
      {categories.map(category => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  </main>
);

export default Home;
