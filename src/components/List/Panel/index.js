import React from "react"
import * as S from "./styled"

const Panel = ({ name, slug }) => (
  <S.PanelWrapper>
    <S.PanelLink to={`/${slug}`}>
      <S.PanelContent>
        <S.PanelIcon name={slug} size={{ width: 50, height: 50 }} />
        <S.PanelName>{name}</S.PanelName>
      </S.PanelContent>
    </S.PanelLink>
  </S.PanelWrapper>
)

export default Panel
