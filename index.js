'use strict'

const { graphql, buildSchema } = require('graphql')

// Defining Schema
const schema = buildSchema(`
  type Query {
    hello: String
    sayHello: String
  }
`)

// Config resolvers
const resolvers = {
  hello: () => {
    return 'Hola mundo'
  },
  sayHello: () => {
    return 'Hola a todos'
  }
}

// exec query
graphql(schema, `{ sayHello }`, resolvers).then(data => {
  console.log(data);
})