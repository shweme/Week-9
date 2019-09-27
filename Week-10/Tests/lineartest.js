var linear = require('../linearpoint');
var assert = require('assert');

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('Tests for function one', () => {
        describe('Test Case 1 #fnOne()',() => {
            it('should return 6', () => {
                assert.equal(linear(2, 1, 4), 6);
            });
        });
        describe('Test Case #fnOne()', () => {
            it('should return 4', () => {
                assert.equal(assert.equal(linear(2, 0, 4), 4));
            });
        });
        describe('Test Case #fnOne()', () => {
            it('should return 2', () => {
                assert.equal(assert.equal(linear(2, -1, 4), 2));
            });
        });

    });
});