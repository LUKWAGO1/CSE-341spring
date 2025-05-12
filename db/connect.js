// db/connect.js
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Missing MongoDB URI in environment variables.');
}

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log('✅ Connected to MongoDB');
  }
  return client;
}

module.exports = { connectToDatabase };
