exports.insertDocuments = function(collection, docArray, callback) {
    collection.insertMany(docArray, function(err, result){
    console.log("---------------");
    console.log("     Create    ");
    console.log("---------------");
    console.log("Inserted the following documents into the collection:");
    console.log(docArray);
    callback(result);
    });  
    callback(result);
};
