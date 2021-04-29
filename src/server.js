const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const corsOptions = {
    origin: "*",
    credentials: true,
};

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    server.applyMiddleware({ app, cors: corsOptions });

    app.use(express.static(path.join(__dirname, "/public")));

    app.listen(4000, () => {
        console.log("Server ready at http://localhost:4000");
        console.log(`Graphql Playground http://localhost:4000${server.graphqlPath}`);
    });
};

startServer();
