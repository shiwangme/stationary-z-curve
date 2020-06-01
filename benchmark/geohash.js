/* eslint-disable import/no-extraneous-dependencies */
const Benchmark = require('benchmark');
const geohash = require('ngeohash');

const suite = new Benchmark.Suite();

suite
  .add('Geohash#encode(precision=9)', () => {
    geohash.encode(32.05, 118.78333, 9);
  })
  .add('Geohash#encode(precision=10)', () => {
    geohash.encode(32.05, 118.78333, 10);
  })
  .add('Geohash#encode(precision=11)', () => {
    geohash.encode(32.05, 118.78333, 11);
  })
  .add('Geohash#encode(precision=12)', () => {
    geohash.encode(32.05, 118.78333, 12);
  })
  .add('Geohash#encode(precision=13)', () => {
    geohash.encode(32.05, 118.78333, 13);
  })
  .add('Geohash#encode(precision=14)', () => {
    geohash.encode(32.05, 118.78333, 14);
  })
  .add('Geohash#encode(precision=15)', () => {
    geohash.encode(32.05, 118.78333, 15);
  })
  .add('Geohash#encode(precision=16)', () => {
    geohash.encode(32.05, 118.78333, 16);
  })
  .add('Geohash#encode(precision=17)', () => {
    geohash.encode(32.05, 118.78333, 17);
  })
  .add('Geohash#decode(precision=9)', () => {
    geohash.decode('wtsqqfx2u');
  })
  .add('Geohash#decode(precision=10)', () => {
    geohash.decode('wtsqqfx2u1');
  })
  .add('Geohash#decode(precision=11)', () => {
    geohash.decode('wtsqqfx2u1n');
  })
  .add('Geohash#decode(precision=12)', () => {
    geohash.decode('wtsqqfx2u1n2');
  })
  .add('Geohash#decode(precision=13)', () => {
    geohash.decode('wtsqqfx2u1n2v');
  })
  .add('Geohash#decode(precision=14)', () => {
    geohash.decode('wtsqqfx2u1n2vx');
  })
  .add('Geohash#decode(precision=15)', () => {
    geohash.decode('wtsqqfx2u1n2vxv');
  })
  .add('Geohash#decode(precision=16)', () => {
    geohash.decode('wtsqqfx2u1n2vxv7');
  })
  .add('Geohash#decode(precision=17)', () => {
    geohash.decode('wtsqqfx2u1n2vxv76');
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();
