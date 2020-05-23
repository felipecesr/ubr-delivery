import React from "react"
import * as S from "./styled"

const Panel = ({ name, slug, commerces }) => (
  <S.PanelWrapper>
    <S.PanelLink
      to={`/${slug}`}
      swipe
      direction="left"
      top="entry"
      entryOffset={80}
    >
      <S.PanelContent>
        <S.PanelIcon name={slug} size={{ width: 32, height: 32 }} />
        <S.PanelName>{name}</S.PanelName>
        <S.PanelCounter>{commerces.length} comércios</S.PanelCounter>
      </S.PanelContent>
    </S.PanelLink>
  </S.PanelWrapper>
)

export default Panel
