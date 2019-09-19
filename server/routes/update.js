module.exports = function(db, app, ObjectID) {
    var result;
    app.post('/update', function(req, res) {
        if(!req.body){
            return res.sendStatus(400);
        }
        product = req.body;
        let objectid = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({ _id:objectid}, {$set: {name: product.name, description: product.description, price: product.price, units:product.units}}, ()=> {
            res.send({'ok':product.objid});
        });
    });
};