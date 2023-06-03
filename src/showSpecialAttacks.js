/* eslint-disable linebreak-style */
/* eslint-disable no-prototype-builtins */
export default function showSpecialAttacks(obj) {
  const { special } = obj;
  for (let i = 0; i < special.length; i += 1) {
    if (!(special[i].hasOwnProperty('description'))) {
      const { description = 'Описание недоступно' } = special[i];
      special[i].description = description;
    }
  }
  return special;
}
