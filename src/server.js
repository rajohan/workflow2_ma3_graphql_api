const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const port = process.env.PORT || 4000;

const corsOptions = {
    origin: "*",
    credentials: true,
};

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers, playground: true });
    await server.start();

    server.applyMiddleware({ app, cors: corsOptions });

    app.use(express.static(path.join(__dirname, "/public")));

    app.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}`);
        console.log(`Graphql Playground http://localhost:${port}${server.graphqlPath}`);
    });
};

startServer();
