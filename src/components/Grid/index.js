import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

const Grid = ({ categories }) => (
  <S.Grid>
    {categories.edges.map(edge => {
      const { name, slug } = edge.node

      return (
        <Link key={slug} to={`/${slug}`}>
          {name}
        </Link>
      )
    })}
  </S.Grid>
)

Grid.defaultProps = {
  categories: [],
}

export { Grid }
