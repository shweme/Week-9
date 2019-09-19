module.exports = function(db, app) {
    
    app.get('/getList', function(req, res) {
        if(!req.body){
            return res.sendStatus(400);
        }
        const collection = db.collection('products');
        collection.find({}).toArray((err, data)=> {
            res.send(data);
        });
    });
};