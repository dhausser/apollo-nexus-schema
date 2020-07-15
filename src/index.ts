import { makeSchema } from '@nexus/schema';
import { ApolloServer } from 'apollo-server';
import path from 'path'
import * as types from './schema'

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, './generated/schema.gen.graphql'),
    typegen: path.join(__dirname, './generated/nexusTypes.gen.ts'),
  },
  // typegenAutoConfig: {
  //   sources: [
  //     {
  //       source: path.join(__dirname, './typeDefs.ts'),
  //       alias: 't',
  //     }
  //   ],
  //   contextType: 't.Context',
  // },
});

const server = new ApolloServer({
  schema,
});

const port = process.env.PORT || 4000;

server.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
