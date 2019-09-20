module.exports = function(db, app, ObjectID) {
    app.post('/deleteItem', function(req, res) {
        if(!req.body){
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        let objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.deleteOne({ _id:objectid}, (err, docs) => {
            collection.find({}).toArray((err, data) => {
               res.send(data);  
            });
           
        });
    });
};