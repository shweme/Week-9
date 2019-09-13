exports.removeDocuments = function(collection, queryJSON, callback) {
    collection.deleteOne(queryJSON, function(err, result) {
        console.log("---------------");
        console.log("     Delete    ");
        console.log("---------------");
        console.log("Removed the documents with: ");
        console.log(queryJSON);
        callback(result);
    });
};