
exports.min = function min (array) {
  if ( !Array.isArray(array) || array.length === 0  ) return 0;

  let min = array[0];

  for (let key of array) {
    if (key < min) min = key;
  }
  return min;
}

exports.max = function max (array) {
  if ( !Array.isArray(array) || array.length === 0  ) return 0;

  let max = array[0];

  for (let key of array) {
    if (key > max) max = key;
  }
  return max;
}

exports.avg = function avg (array) {
  if ( !Array.isArray(array) || array.length === 0  ) return 0;

  return array.reduce( (accum, value) => accum + value ) / array.length;;
}
