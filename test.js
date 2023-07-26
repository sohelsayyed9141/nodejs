var request = require('supertest');

var app = require('../index.js');describe('GET /', function() {

 it('respond with hello world', function(done) { //navigate to root and check the the response is "hello sohelsayyed"

 request(app).get('/').expect('hello sohel ', done);

 });

});
