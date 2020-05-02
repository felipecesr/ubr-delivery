import React from "react"
import * as S from "./styled"

import Panel from "./Panel"

const List = ({ categories }) => {
  if (!categories.edges.length) {
    return "Loading..."
  }

  return (
    <S.ListWrapper>
      {categories.edges.map(edge => {
        const { name, slug } = edge.node
        return <Panel key={slug} name={name} slug={slug} />
      })}
    </S.ListWrapper>
  )
}

List.defaultProps = {
  categories: [],
}

export { List }
