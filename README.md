# 稳态 Z 曲线

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/z-curve.svg)](https://npmjs.org/package/z-curve) [![npm](https://img.shields.io/npm/dt/z-curve.svg)](https://npmjs.org/package/z-curve) [![Build Status](https://travis-ci.org/shiwangme/stationary-z-curve.svg?branch=master)](https://travis-ci.org/shiwangme/stationary-z-curve) [![codebeat badge](https://codebeat.co/badges/28e5a14f-4281-412c-8e47-1868cd804d9b)](https://codebeat.co/projects/github-com-shiwangme-stationary-z-curve-master) [![codecov](https://codecov.io/gh/shiwangme/stationary-z-curve/branch/master/graph/badge.svg)](https://codecov.io/gh/shiwangme/stationary-z-curve)

## 安装使用

```js
const z = require('z-curve');

z.encode(lat, lng, precision);

z.decode(z_val);
```

## API

### encode(latitude, longitude, precision = 9)

Encode a pair of latitude and longitude values into a z-curve.

### decode(z_value)

Decode a hash string into pair of latitude and longitude values. A javascript object is returned with `latitude` and `longitude` keys.

## 参考资料

- GeoHash Node 实现： <https://github.com/sunng87/node-geohash>
