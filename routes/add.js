module.exports = function(db, app) {
    app.post('/add', function(req, res) {

        if(!req.body) {
            return res.sensdStatus(400);
        }
        product = req.body;
        const collection = db.collection('products');
        collection.find({'id' : product.id}).count((err, count)=> {
            if( count == 0){
                collection.insertOne(product, (err, dbres)=>{
                    if(err) throw err;
                    let num = dbres.insertCount;
                    res.send({'num' : num, err : null});
                });
            } else{
                res.send({num : 0, err : "duplicate item"});
            }
        });
    });
}