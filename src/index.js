const MIN_LAT = -90;
const MAX_LAT = 90;
const MIN_LNG = -180;
const MAX_LNG = 180;

exports.encode = (latitude, longitude) => {
  let result = 0;
  let maxLat = MAX_LAT;
  let minLat = MIN_LAT;
  let maxLng = MAX_LNG;
  let minLng = MIN_LNG;

  for (let i = 0; i < 19; i += 1) {
    const isLat = i % 2 === 1;
    if (isLat) {
      const mid = (maxLat + minLat) / 2;
      if (latitude > mid) {
        result = (result << 1) + 1;
        minLat = mid;
      } else {
        result <<= 1;
        maxLat = mid;
      }
    } else {
      const mid = (maxLng + minLng) / 2;
      if (longitude > mid) {
        result = (result << 1) + 1;
        minLng = mid;
      } else {
        result <<= 1;
        maxLng = mid;
      }
    }
  }
  // if (scala === 0) {
  //   return parseInt(result, 2);
  // }
  return result;
};

exports.decode = (z) => {
  let maxLat = MAX_LAT;
  let minLat = MIN_LAT;
  let maxLng = MAX_LNG;
  let minLng = MIN_LNG;

  let binary = z;

  for (let i = 18; i >= 0; i -= 1) {
    const bit = binary / (1 << i);
    if (bit >= 1) {
      binary -= 1 << i;
    }
    const isLat = i % 2 === 1;
    if (isLat) {
      const mid = (minLat + maxLat) / 2;
      if (bit >= 1) {
        minLat = mid;
      } else {
        maxLat = mid;
      }
    } else {
      const mid = (minLng + maxLng) / 2;
      if (bit >= 1) {
        minLng = mid;
      } else {
        maxLng = mid;
      }
    }
  }

  return {
    lat: (minLat + maxLat) / 2,
    lng: (minLng + maxLng) / 2
  };
};
