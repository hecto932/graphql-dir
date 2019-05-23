'use strict';

const { MongoClient } = require('mongodb');

const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

let connection

async function connectDB() {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    });
    connection = client.db(DB_NAME);
  } catch (err) {
    console.error(err, mongoUrl);
    process.exit(1);
  }

  return connection;
}

module.exports = connectDB;