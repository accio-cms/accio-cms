"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const app_module_1 = require("./app-module");
const server = new apollo_server_1.ApolloServer({
    modules: [app_module_1.AppModule],
    context: app_module_1.AppModule.context,
});
exports.default = server;
//# sourceMappingURL=server.js.map