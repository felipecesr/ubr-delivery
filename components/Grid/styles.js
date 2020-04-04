import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.5em;

  > * {
    background-color: darkgray;
    color: white;
    padding: 2em;
    border-radius: 0.5em;
  }
`;
