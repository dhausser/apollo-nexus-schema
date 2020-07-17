import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { makeSchema } from '@nexus/schema';
import { ApolloServer } from 'apollo-server';
import { createContext } from './context'
import * as types from './schema'
import * as path from 'path'

const schema = makeSchema({
  types,
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }]
  },
  plugins: [nexusSchemaPrisma({
    experimentalCRUD: true
  })],
  outputs: {
    schema: path.join(__dirname, './generated/schema.gen.graphql'),
    typegen: path.join(__dirname, './generated/nexusTypes.gen.ts'),
  },
  prettierConfig: require.resolve('../.prettierrc')
});

const server = new ApolloServer({
  schema,
  context: createContext(),
});

const port = process.env.PORT || 4000;

server.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
