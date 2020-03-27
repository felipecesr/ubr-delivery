import React from 'react';
import { Card } from './Card';
import { data } from '../api/data';

const Category = ({ category }) => {
  const categoryItems = data[category.slug];
  return (
    <section className="section">
      <h2 className="section__title">{category.name}</h2>
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
