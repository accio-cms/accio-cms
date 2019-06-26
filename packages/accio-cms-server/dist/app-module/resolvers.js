"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    Query: {
        user: (_root, props) => {
            return {
                id: props.id,
                username: 'USERNAME',
            };
        },
    },
    User: {
        id: (user) => user.id,
        username: (user) => user.username,
    },
};
//# sourceMappingURL=resolvers.js.map