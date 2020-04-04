import React from "react";
import * as S from "./styles";

const Grid = ({ categories }) => (
  <S.Grid>
    {categories.map(category => {
      const { name, slug } = category;

      return (
        <a key={slug} href={`/${slug}`}>
          {name}
        </a>
      );
    })}
  </S.Grid>
);

Grid.defaultProps = {
  categories: []
};

export { Grid };
