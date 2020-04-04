import React from 'react';
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

const Category = ({ name, items }) => (
  <main className="container">
    <Logo />
    <section>
      <CategoryTitle>
        <a href="/">
          <Icon />
        </a>
        {name}
      </CategoryTitle>
      {items.map((item) => (
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

export async function getStaticPaths() {
  const paths = categories.map((item) => `/${item.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const items = data.filter((item) => item.category.slug === category);
  const { name } = categories.filter((cat) => cat.slug === category)[0];

  return { props: { name, items } };
}

export default Category;
