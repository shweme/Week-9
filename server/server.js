//getting dependencies
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;


app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, { poolSize : 10, useNewUrlParser : true, useUnifiedTopology : true }, function(err, client) {
    if(err) { return console.log(err);}
    
    const dbName = 'mydb';
    const db = client.db(dbName);

    require('./routes/add.js')(db, app);
    require('./routes/getItem.js')(db, app, ObjectID);
    require('./routes/getList.js')(db, app);
    require('./routes/update.js')(db, app, ObjectID);
    require('./routes/deleteItem.js')(db, app, ObjectID);
    require('./routes/validID.js')(db, app);
    require('./routes/prodCount.js')(db, app, ObjectID);

    require('./listen.js')(http);

});


