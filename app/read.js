exports.findDocuments = function(collection, queryJSON, callback) {
    collection.find(queryJSON).toArray(function(err, docs) {
        console.log("---------------");
        console.log("      Read     ");
        console.log("---------------");
        console.log("found the following records: ");
        console.log(docs);
        callback(docs);
    });
};