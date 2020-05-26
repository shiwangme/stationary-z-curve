// eslint-disable-next-line import/no-extraneous-dependencies
const Benchmark = require('benchmark');
const z = require('..');

const suite = new Benchmark.Suite();

suite
  .add('Z#encode', () => {
    z.encode(32.05, 118.78333);
  })
  .add('Z#decode', () => {
    z.decode(471947);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();
