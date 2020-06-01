// eslint-disable-next-line import/no-extraneous-dependencies
const Benchmark = require('benchmark');
const z = require('..');

const suite = new Benchmark.Suite();

suite
  .add('Z#encode(scale=0)', () => {
    z.encode(32.05, 118.78333);
  })
  .add('Z#decode(scale=0)', () => {
    z.decode(471947);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();
