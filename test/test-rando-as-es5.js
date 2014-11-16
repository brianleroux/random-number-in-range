var test = require('tape')
  , rando = require('./../')

test('exists', function(t) {
  t.ok(rando, 'it exists')
  t.end()
})

test('can return a number', function(t) {
  t.equal(1,rando(1,1), 'retuns a 1 for a range of 1 for 1')
  t.end()
})
