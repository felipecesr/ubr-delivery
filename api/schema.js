import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    categories(order: String): [Category]!
    category(id: ID!): Category!
    commerces(order: String): [Commerce]!
    commerce(id: ID!): Commerce!
  }

  type Category {
    id: String!
    name: String!
    slug: String!
    commerces: [Commerce!]!
  }

  type Commerce {
    id: String!
    name: String!
    slug: String!
    phone: [String!]!
    whatsapp: [String!]!
    categories: [Category!]!
  }
`;

export default typeDefs;
