"use strict";

require('dotenv').config();

const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const cors = require('cors');
const gqlMiddleware = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");

const port = process.env.PORT || 3000;
const app = express();
const isDev = process.env.NODE_ENV !== 'production'

// Defining Schema
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());
app.use('/', express.static(join(__dirname, 'public')))

app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
  })
);

app.listen(port, () => {
  console.log(`GraphQL server listening on port http://localhost:${port}/`);
});
