# 稳态 Z 曲线

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/z-curve.svg)](https://npmjs.org/package/z-curve) [![npm](https://img.shields.io/npm/dt/z-curve.svg)](https://npmjs.org/package/z-curve) [![Build Status](https://travis-ci.org/shiwangme/stationary-z-curve.svg?branch=master)](https://travis-ci.org/shiwangme/stationary-z-curve) [![codebeat badge](https://codebeat.co/badges/28e5a14f-4281-412c-8e47-1868cd804d9b)](https://codebeat.co/projects/github-com-shiwangme-stationary-z-curve-master) [![codecov](https://codecov.io/gh/shiwangme/stationary-z-curve/branch/master/graph/badge.svg)](https://codecov.io/gh/shiwangme/stationary-z-curve)

## 安装使用

```js
const z = require('z-curve');

z.encode(lat, lng, scala);

z.decode(z_val);
```

在浏览器中测试： <https://npm.runkit.com/z-curve>

## API

### encode(latitude, longitude, scala = 0)

Encode a pair of latitude and longitude values into a z-curve.

```js
const z = require('z-curve');

z.encode(32.05, 118.78333) === 471947;
```

### decode(z_value)

Decode a hash string into pair of latitude and longitude values. A javascript object is returned with `lat` and `lng` keys.

```js
const z = require('z-curve');

z.decode(471947);
// {
//   lat: 32.16796875,
//   lng: 118.65234375
// }
```

## 性能测试

测试环境：

- CPU: Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz (8 核心 16 线程)
- Memory: 72 GB 2667 MHz DDR4
- GPU: Radeon Pro 580X 8 GB

[geohash.js](benchmark/geohash.js)

```
Geohash#encode(precision=9) x 3,181,497 ops/sec ±0.48% (94 runs sampled)
Geohash#encode(precision=10) x 3,022,347 ops/sec ±0.44% (91 runs sampled)
Geohash#encode(precision=11) x 2,775,291 ops/sec ±0.58% (93 runs sampled)
Geohash#encode(precision=12) x 2,566,356 ops/sec ±0.56% (93 runs sampled)
Geohash#encode(precision=13) x 2,237,286 ops/sec ±0.31% (87 runs sampled)
Geohash#encode(precision=14) x 2,079,761 ops/sec ±0.45% (96 runs sampled)
Geohash#encode(precision=15) x 2,011,565 ops/sec ±0.45% (87 runs sampled)
Geohash#encode(precision=16) x 1,994,243 ops/sec ±0.36% (91 runs sampled)
Geohash#encode(precision=17) x 1,919,700 ops/sec ±0.49% (95 runs sampled)
Geohash#decode(precision=9) x 5,251,890 ops/sec ±0.32% (98 runs sampled)
Geohash#decode(precision=10) x 4,627,638 ops/sec ±0.47% (94 runs sampled)
Geohash#decode(precision=11) x 4,112,752 ops/sec ±0.62% (94 runs sampled)
Geohash#decode(precision=12) x 3,837,541 ops/sec ±0.56% (90 runs sampled)
Geohash#decode(precision=13) x 3,594,750 ops/sec ±0.53% (92 runs sampled)
Geohash#decode(precision=14) x 3,362,043 ops/sec ±0.46% (95 runs sampled)
Geohash#decode(precision=15) x 3,129,069 ops/sec ±0.41% (95 runs sampled)
Geohash#decode(precision=16) x 2,954,406 ops/sec ±0.51% (95 runs sampled)
Geohash#decode(precision=17) x 2,786,121 ops/sec ±0.49% (95 runs sampled)
```


[z-curve.js](benchmark/z-curve.js)

```
Z#encode(scale=0) x 30,718,390 ops/sec ±0.38% (95 runs sampled)
Z#decode(scale=0) x 23,952,369 ops/sec ±0.45% (96 runs sampled)
```


## 参考资料

- GeoHash Node 实现： <https://github.com/sunng87/node-geohash>
- IEEE 754 工具： <https://baseconvert.com/ieee-754-floating-point>
