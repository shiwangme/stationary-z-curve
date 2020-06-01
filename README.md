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
Geohash#encode(precision=9) x 3,215,635 ops/sec ±0.36% (91 runs sampled)
Geohash#encode(precision=10) x 2,878,923 ops/sec ±0.67% (95 runs sampled)
Geohash#encode(precision=11) x 2,682,806 ops/sec ±0.41% (96 runs sampled)
Geohash#encode(precision=12) x 2,485,485 ops/sec ±0.40% (94 runs sampled)
Geohash#encode(precision=13) x 2,244,528 ops/sec ±0.41% (95 runs sampled)
Geohash#encode(precision=14) x 2,097,478 ops/sec ±0.55% (95 runs sampled)
Geohash#encode(precision=15) x 2,027,248 ops/sec ±0.65% (86 runs sampled)
Geohash#encode(precision=16) x 1,978,832 ops/sec ±0.34% (98 runs sampled)
Geohash#encode(precision=17) x 1,896,373 ops/sec ±0.43% (91 runs sampled)
Geohash#decode(precision=9) x 5,080,911 ops/sec ±0.41% (96 runs sampled)
Geohash#decode(precision=10) x 4,590,824 ops/sec ±0.50% (93 runs sampled)
Geohash#decode(precision=11) x 4,096,476 ops/sec ±0.41% (92 runs sampled)
Geohash#decode(precision=12) x 3,912,653 ops/sec ±0.44% (97 runs sampled)
Geohash#decode(precision=13) x 3,601,804 ops/sec ±0.49% (93 runs sampled)
Geohash#decode(precision=14) x 3,375,785 ops/sec ±0.37% (94 runs sampled)
Geohash#decode(precision=15) x 3,096,618 ops/sec ±0.44% (92 runs sampled)
Geohash#decode(precision=16) x 2,942,242 ops/sec ±0.53% (92 runs sampled)
Geohash#decode(precision=17) x 2,754,588 ops/sec ±0.41% (94 runs sampled)
```


[z-curve.js](benchmark/z-curve.js)

```
Z#encode(scale=0) x 30,013,706 ops/sec ±0.43% (95 runs sampled)
Z#decode(scale=0) x 23,199,739 ops/sec ±1.22% (92 runs sampled)
```


## 参考资料

- GeoHash Node 实现： <https://github.com/sunng87/node-geohash>
- IEEE 754 工具： <https://baseconvert.com/ieee-754-floating-point>
