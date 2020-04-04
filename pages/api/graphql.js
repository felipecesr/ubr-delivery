import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../api/schema';
import resolvers from '../../api/resolvers';
import { models, db } from '../../api/db';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
