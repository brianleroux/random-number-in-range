/**
 * Here we use import * to grab the module as the default.
 */ 
import * as test from 'tape'
import * as rando from './../'

test('exists', (t) => {
  t.ok(rando, 'it exists')
  t.end()
})

/** 
 * We'd probably like to use this syntax: 
 *
 *     import test from 'tape' 
 *
 * But we can't because it becomes:
 *      
 *      var test = require('tape').default
 *
 * However, we could write a custom module formatter for 6to5 to add the implicit defaults:
 *
 * var oldRequire = require
 * 
 * require = function(moduleid) {
 *   var r = oldRequire(moduleid)
 *   if (!r.default) r.default = r
 *   return r
 * }
 *
 * While the * syntax is a bit smelly I think I like it because it is more explicit. YMMV.
 *
 * For more on custom formatters see https://6to5.github.io/modules.html
 */
