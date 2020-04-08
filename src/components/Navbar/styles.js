import styled from "styled-components"

export const Navbar = styled.nav`
  background-color: #fff;
  padding: 1em 0;

  ul {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 10px;
    grid-auto-flow: column;
    grid-auto-columns: calc(50% - var(--gutter) * 2);
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    padding-bottom: calc(0.75 * var(--gutter));
    margin-bottom: calc(-0.25 * var(--gutter));

    &:before {
      content: "";
      width: 10px;
    }
  }

  li {
    scroll-snap-align: center;
  }

  a {
    display: block;
    position: relative;
    overflow: hidden;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #34323b;
    background: linear-gradient(
      to right,
      #34323b 8%,
      lighten(#34323b, 5%) 18%,
      #34323b 33%
    );
    background-size: 800px 104px;
    width: 96px;
    height: 96px;
  }
`
