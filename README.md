# 稳态 Z 曲线

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
