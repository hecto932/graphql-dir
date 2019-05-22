'use strict'

const express = require('express');
const gqlMiddleware = require('express-graphql');

const port = process.env.PORT || 3000;
const app = express();

const { graphql, buildSchema } = require('graphql')

// Defining Schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Config resolvers
const resolvers = {
  hello: () => {
    return 'Hola mundo'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`GraphQL server listening on port http://localhost:${port}/`);
})