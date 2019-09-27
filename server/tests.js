var assert = require('assert');
var app = require('./server.js');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/getList', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/getList')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.eql(2);
                    done();
                });
        });
    });

    describe('/add', () => {
        it('it should insert a doc', (done) => {
            chai.request(app).post('/add').type('form').send({ 'name': 'Shweta', 'id': 3 })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('name');
                    res.body.should.have.property('id');
                    console.log(res.body);
                    done();
                });
        });
    });
    


});