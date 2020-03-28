import { Category } from "../components/Category";
import data from "../_data/dev/sheet.json";

const Home = () => {
  const categories = [...new Set(data.map(item => item.category))];

  return (
    <main className="container">
      <h1 className="title">Uruburetama Delivery</h1>
      {categories.map(category => (
        <Category key={category} category={category} />
      ))}
    </main>
  );
};

export default Home;
