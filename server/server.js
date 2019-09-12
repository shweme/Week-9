//sample data

let docArray = [
                { id : 1, name : "iPhone XI", descr : "The newest iPhone from Apple in 2019", price : 1199.00, units : 1000},
                { id : 2, name : "iPhone IX", descr : "The newest iPhone from Apple in 2018", price : 999.95, units : 850},
                { id : 3, name : "iPhone VII", descr : "The newest iPhone from Apple in 2017", price : 799.95, units : 500}
               ]; 

const queryJSONf = {};
const queryJSONup = { name : "iPhone X"};
const updateJSON = { id : 2 };
const queryJSONdel = { id : 3 };

//importing CRUD documents
const add = require('../operations/add');
const remove = require('../operations/remove');
const update = require('../operations/update');
const read = require('../operations/read');


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