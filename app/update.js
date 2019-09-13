exports.updateDocuments = function(collection, queryJSON, updateJSON, callback) {
    //update document with queryJson, set updateJSON
    collection.updateOne(queryJSON, { $set: updateJSON }, function(err, result){
        console.log("---------------");
        console.log("     Update    ");
        console.log("---------------");
        console.log("For the documents with: ");
        console.log(queryJSON);
        console.log("SET: ");
        console.log(updateJSON);
        callback(result);
    });
};