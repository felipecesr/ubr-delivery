import styled from "styled-components"

export const Card = styled.article`
  background-color: var(--color-elements);
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  padding: 1.2em;
`

export const CardTitle = styled.h2`
  color: #464d6c;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 16px;
`

export const ContactList = styled.ul`
  + ul {
    margin-top: 10px;
  }
`

export const ContactListItem = styled.li`
  + li {
    margin-top: 10px;
  }
`
