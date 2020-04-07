import React from 'react';
import fetch from 'node-fetch';
import { Logo } from '../components/Logo';
import { Card } from '../components/Card';
import { CategoryTitle } from '../components/CategoryTitle/styles';
import { ArrowBack } from 'styled-icons/boxicons-regular';
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
          phone={item.phone[0]}
          whatsapp={item.whatsapp[0]}
        />
      ))}
    </section>
  </main>
);

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'post',
    body: JSON.stringify({ query: '{ categories { slug } }' }),
    headers: { 'Content-Type': 'application/json' },
  });
  const {
    data: { categories },
  } = await res.json();

  const paths = categories.map((item) => `/${item.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query: '{ commerces { name phone whatsapp categories { name slug } } }',
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const {
    data: { commerces },
  } = await res.json();

  const items = commerces.filter(
    (item) => item.categories[0].slug === category
  );

  return { props: { name: items[0].categories[0].name, items } };
}

export default Category;
