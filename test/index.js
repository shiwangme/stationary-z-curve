const test = require('ava');
const z = require('..');

test('encode', (t) => {
  t.is(z.encode(32.05, 118.78333), 471947);
});
