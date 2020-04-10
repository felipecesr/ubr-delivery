import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.5em;
  margin-bottom: 2rem;

  > * {
    background-color: #f0f0f0;
    color: #1a1a1a;
    padding: 1.5em;
    border-radius: 0.5em;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`
