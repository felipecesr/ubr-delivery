import styled from "styled-components"

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
`

export const ContactButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ icon }) => (icon === "phone" ? "#473c98" : "#26d366")};
  border-radius: 5px;
  width: 40px;
  height: 40px;
  margin-right: 0.5em;

  svg {
    width: 1em;
    height: 1em;
    fill: #fff;
  }
`
