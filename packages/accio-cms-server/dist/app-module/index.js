"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@graphql-modules/core");
const graphql_toolkit_1 = require("graphql-toolkit");
exports.AppModule = new core_1.GraphQLModule({
    name: 'user',
    typeDefs: graphql_toolkit_1.loadSchemaFiles(__dirname + '/schema/'),
    resolvers: graphql_toolkit_1.loadResolversFiles(__dirname + '/resolvers/'),
});
//# sourceMappingURL=index.js.map