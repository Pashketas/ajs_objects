/* eslint-disable no-restricted-syntax */

export default function orderByProps(obj, order) {
  const keys = (Object.keys(obj)).sort();
  const orderRes = [];
  for (let i = 0; i < order.length; i += 1) {
    if (keys.includes(order[i])) {
      const removedIndex = keys.indexOf(order[i]);
      keys.splice(removedIndex, 1);
    } else {
      throw new Error('Таких элементов не существует в исходном массиве');
    }
  }
  const length = Math.max(keys.length, order.length);
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      const addedProp = {
        key: prop,
        value: obj[prop],
      };
      for (let i = 0; i < length; i += 1) {
        if (prop === order[i]) {
          orderRes[i] = addedProp;
        } else if (prop === keys[i]) {
          orderRes[i + order.length] = addedProp;
        }
      }
    }
  }
  return orderRes;
}
