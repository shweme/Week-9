const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

const colName = 'product';

const server = require('../server/server');


// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection(colName);
    server(client, collection);
});