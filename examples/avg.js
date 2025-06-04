// TODO: Crea una función avg que dado un array de valores nos devuelva la media.
export function avg(array) {
  return array.reduce((pre, cur) => pre + cur, 0) / array.length;
}
