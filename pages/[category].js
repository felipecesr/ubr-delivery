import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";
import data from "../_data/dev/sheet.json";
import styled from "styled-components";

const CategoryTitle = styled.h2`
  line-height: 1.8;
  margin-bottom: 16px;
  border-bottom: 2px dashed var(--primary-color);
`;

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryItems = data.filter(item => item.category.slug === category);

  return (
    <main className="container">
      <Logo />
      <section>
        <CategoryTitle>{category}</CategoryTitle>
        {categoryItems.map(item => (
          <Card
            key={item.name}
            name={item.name}
            phone={item.phone}
            whatsapp={item.whatsapp}
          />
        ))}
      </section>
    </main>
  );
};

export default Category;
