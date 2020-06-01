const test = require('ava');
const z = require('..');

test('encode', (t) => {
  t.is(z.encode(32.05, 118.78333), 471947);
});

test('decode', (t) => {
  t.is(
    JSON.stringify(z.decode(471947)),
    JSON.stringify({
      latitude: 32.16796875,
      longitude: 118.65234375
    })
  );
});
