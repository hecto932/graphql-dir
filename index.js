'use strict'

const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers');

const port = process.env.PORT || 3000
const app = express()

const { buildSchema } = require('graphql')

// Defining Schema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8'));

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`GraphQL server listening on port http://localhost:${port}/`)
})
