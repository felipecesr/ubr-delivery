import React from "react"
import * as S from "./styles"

const SearchBox = ({ className, value, onChange }) => (
  <S.SearchWrapper className={className}>
    <S.SearchIcon />
    <S.SearchInput
      type="search"
      name="search"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  </S.SearchWrapper>
)

export { SearchBox }
