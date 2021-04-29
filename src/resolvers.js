const { posts } = require("./data/posts");
const { users } = require("./data/users");

const resolvers = {
    Query: {
        posts: (_, { id }) =>
            id ? posts.filter((post) => post.id === parseInt(id)) : posts,
        users: (_, { id }) =>
            id ? users.filter((user) => user.id === parseInt(id)) : users,
    },
    Post: {
        user(parent) {
            return users.filter((user) => user.id === parent.user)[0];
        },
    },
    User: {
        posts(parent) {
            return posts.filter((post) => post.user === parent.id);
        },
    },
};

module.exports = { resolvers };
