let maths = require('../maths.js');
let test = require('tape');
let tapSpec = require('tap-spec');

test.createStream()
.pipe(tapSpec())
.pipe(process.stdout);

test('sum test', function(t) {
    t.plan(3);

    t.equal(maths.sum(3,5), 8, "3+5 equals 8");
    t.equal(maths.sum(-1,100), 99, "-1+100 equals 99");
    t.equal(maths.sum("test", "blah"), null, "string plus string");

    t.end();
});

