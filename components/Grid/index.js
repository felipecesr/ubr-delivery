import React from 'react';
import Link from 'next/link';
import * as S from './styles';

const Grid = ({ categories }) => (
  <S.Grid>
    {categories.map((category) => {
      const { name, slug } = category;

      return (
        <Link key={slug} href="/[category]" as={`/${slug}`}>
          {name}
        </Link>
      );
    })}
  </S.Grid>
);

Grid.defaultProps = {
  categories: [],
};

export { Grid };
