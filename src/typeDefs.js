const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Post {
        id: ID
        title: String
        body: String
        image: String
        createdAt: String
        user: User
    }

    type User {
        id: ID
        username: String
        email: String
        firstName: String
        lastName: String
        createdAt: String
        posts: [Post]
    }

    type Query {
        posts(id: ID): [Post]
        users(id: ID): [User]
    }
`;

module.exports = { typeDefs };
