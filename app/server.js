//sample data

let docArray = [
                { id : 1, name : "iPhone XI", descr : "The newest iPhone from Apple in 2019", price : 1199.00, units : 1000},
                { id : 2, name : "iPhone IX", descr : "The newest iPhone from Apple in 2018", price : 999.95, units : 850},
                { id : 3, name : "iPhone VIII", descr : "The newest iPhone from Apple in 2017", price : 799.95, units : 500}
               ]; 

const queryJSONf = {};
const queryJSONup = { id : 2 };
const updateJSON = { name : "iPhone X" };
const queryJSONdel = { id : 1 };

//importing CRUD documents
const add = require('./add');
const remove = require('./remove');
const update = require('./update');
const read = require('./read');


module.exports = function(client, col) {
    add.insertDocuments(col, docArray, () => {
        update.updateDocuments(col, queryJSONup, updateJSON, () => {
            remove.removeDocuments(col, queryJSONdel, () => {
                read.findDocuments(col, queryJSONf, () => {
                    client.close();
                });
            });
        });
    });
};