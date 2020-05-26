const assert = require('assert');

const MIN_LAT = -90;
const MAX_LAT = 90;
const MIN_LNG = -180;
const MAX_LNG = 180;

exports.encode = (latitude, longitude, scala = 0) => {
  assert.ok(scala >= 0, 'Scala >= 0');
  assert.ok(scala <= 7, 'Scala <= 7');
  let result = '';
  const cursor = {
    maxLat: MAX_LAT,
    minLat: MIN_LAT,
    maxLng: MAX_LNG,
    minLng: MIN_LNG
  };
  for (let i = 0; i < 19; i += 1) {
    const LatOrLng = i % 2 === 1 ? 'Lat' : 'Lng';
    const toCheck = LatOrLng === 'Lat' ? latitude : longitude;
    const mid = (cursor[`max${LatOrLng}`] + cursor[`min${LatOrLng}`]) / 2;
    if (toCheck > mid) {
      result += '1';
      cursor[`min${LatOrLng}`] = mid;
    } else {
      result += '0';
      cursor[`max${LatOrLng}`] = mid;
    }
    // console.log(result);
    // console.log(cursor);
  }
  // if (scala === 0) {
  //   return parseInt(result, 2);
  // }
  // result += '.';
  return parseInt(result, 2);
};
