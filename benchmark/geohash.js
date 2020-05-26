/* eslint-disable import/no-extraneous-dependencies */
const Benchmark = require('benchmark');
const geohash = require('ngeohash');

const suite = new Benchmark.Suite();

suite
  .add('Geohash#encode', () => {
    geohash.encode(32.05, 118.78333);
  })
  .add('Geohash#decode', () => {
    geohash.decode('ww8p1r4t8');
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();
