import { ApolloServer } from 'apollo-server';
import typeDefs from './types';
import Query from './resolvers/Query';
import { removeEmptyProperties } from './utils/object';

const startServer = () => {
  try {
    const resolvers = {
      Query,
    };

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
    });
    /* const options = {
      formatParams: args => removeEmptyProperties(args),
      endpoint: '/graphql',
      playground: '/playground',
    }; */
    // eslint-disable-next-line no-console
    server
      .listen()
      .then(({ port }) =>
        console.log(`Server is running on: http://localhost:${port}`)
      );
  } catch (e) {
    throw new Error(e.message);
  }
};

if (process.env.NODE_ENV === 'production') {
  startServer();
}

export default startServer;
