import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../components/Logo';
import { Card } from '../components/Card';
import { categories } from '../utils/categories';
import { CategoryTitle } from '../components/CategoryTitle/styles';
import { ArrowBack } from 'styled-icons/boxicons-regular';
import data from '../_data/dev/sheet.json';
import styled from 'styled-components';

const Icon = styled(ArrowBack)`
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 15px;
  margin-bottom: 5px;
  color: #fff;
  background-color: #1a1a1a;
  padding: 5px;
  border-radius: 50%;
`;

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryItems = data.filter((item) => item.category.slug === category);

  const [fullCategory] = categories.filter((cat) => cat.slug === category);

  return (
    <main className="container">
      <Logo />
      <section>
        {fullCategory && (
          <CategoryTitle>
            <Link href="/">
              <Icon />
            </Link>
            {fullCategory.name}
          </CategoryTitle>
        )}
        {categoryItems.map((item) => (
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
