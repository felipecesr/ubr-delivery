import React from "react";
import { Card } from "../Card";
import data from "../../_data/dev/sheet.json";
import * as S from "./styles";

const Category = ({ category }) => {
  const categoryItems = data.filter(item => item.category === category);
  return (
    <section>
      <S.CategoryTitle>{category}</S.CategoryTitle>
      {categoryItems.map(item => (
        <Card
          key={item.name}
          name={item.name}
          phone={item.phone}
          whatsapp={item.whatsapp}
        />
      ))}
    </section>
  );
};

export { Category };
