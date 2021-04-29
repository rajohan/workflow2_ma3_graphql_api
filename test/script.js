const ApolloBoost = require("apollo-boost");
const ApolloClient = ApolloBoost.default;
const gql = ApolloBoost.gql;
const fetch = require("node-fetch");

const getData = async () => {
    const response = await fetch("https://noroff-wf2-ma3.herokuapp.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
                    query {
                        posts(id: 1) {
                            id
                            title
                            body
                            image
                            createdAt
                        }
                    }
                `,
        }),
    });

    const json = await response.json();

    console.log(json.data.posts);
};

getData();

const getData2 = async () => {
    const client = new ApolloClient({
        uri: "https://noroff-wf2-ma3.herokuapp.com/graphql",
        fetch,
    });

    const response = await client.query({
        query: gql`
            {
                posts(id: 1) {
                    id
                    title
                    body
                    image
                    createdAt
                }
            }
        `,
    });

    console.log(response.data.posts);
};

getData2();
