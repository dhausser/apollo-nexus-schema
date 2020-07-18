"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var schema_1 = require("nexus-plugin-prisma/schema");
var schema_2 = require("@nexus/schema");
var apollo_server_1 = require("apollo-server");
var context_1 = require("./context");
var types = __importStar(require("./schema"));
var path = __importStar(require("path"));
var schema = schema_2.makeSchema({
    types: types,
    typegenAutoConfig: {
        contextType: '{ prisma: PrismaClient.PrismaClient }',
        sources: [{ source: '.prisma/client', alias: 'PrismaClient' }]
    },
    plugins: [schema_1.nexusSchemaPrisma({
            experimentalCRUD: true
        })],
    outputs: {
        schema: path.join(__dirname, './generated/schema.gen.graphql'),
        typegen: path.join(__dirname, './generated/nexusTypes.gen.ts')
    },
    prettierConfig: require.resolve('../.prettierrc')
});
var server = new apollo_server_1.ApolloServer({
    schema: schema,
    context: context_1.createContext()
});
var port = process.env.PORT || 4000;
server.listen({ port: port }, function () { return console.log("\uD83D\uDE80 Server ready at http://localhost:" + port + server.graphqlPath); });
//# sourceMappingURL=index.js.map