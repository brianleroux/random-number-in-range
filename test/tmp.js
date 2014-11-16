"use strict";
var test = require('tape').default;
var rando = require('./dist/index').default;

test('exists', function(t) {
  t.ok(rando, 'it exists')
  t.end()
});


