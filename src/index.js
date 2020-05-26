const assert = require('assert');

const MIN_LAT = -90;
const MAX_LAT = 90;
const MIN_LNG = -180;
const MAX_LNG = 180;

exports.encode = (latitude, longitude, scala = 0) => {
  assert.ok(scala >= 0, 'Scala >= 0');
  assert.ok(scala <= 7, 'Scala <= 7');
  let result = '';
  let maxLat = MAX_LAT;
  let minLat = MIN_LAT;
  let maxLng = MAX_LNG;
  let minLng = MIN_LNG;
  for (let i = 0; i < 19; i += 1) {
    if (i % 2 === 1) {
      // Lat
      const mid = (maxLat + minLat) / 2;
      if (latitude > mid) {
        result += '1';
        minLat = mid;
      } else {
        result += '0';
        maxLat = mid;
      }
    } else {
      // Lng
      const mid = (maxLng + minLng) / 2;
      if (longitude > mid) {
        result += '1';
        minLng = mid;
      } else {
        result += '0';
        maxLng = mid;
      }
    }
  }
  if (scala === 0) {
    return parseInt(result, 2);
  }
  result += '.';
  return parseInt(result, 2);
};
