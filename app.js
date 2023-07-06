const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define your GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    user(id: ID!): User
  }
`);

// Implement resolver functions
const root = {
  user: (args) => {
    const { id } = args;
    // Here you can implement your logic to fetch user data based on the provided ID
    // For simplicity, let's return sample data for a few predefined users
    const users = [
      {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      {
        id: "3",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
      },
    ];

    // Find the user with the specified ID
    const user = users.find((user) => user.id === id);
    return user;
  },
};

// Create an Express server
const app = express();

// Set up the route for GraphQL requests
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start the server
app.listen(3000, () => {
  console.log(
    "Express GraphQL server is running on http://localhost:3000/graphql"
  );
});
