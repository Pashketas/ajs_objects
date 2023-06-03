/* eslint-disable linebreak-style */
import showSpecialAttacks from '../showSpecialAttacks';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

test('check the function', () => {
  const expected = [{
    icon: 'http://...',
    id: 8,
    name: 'Двойной выстрел',
    description: 'Двойной выстрел наносит двойной урон',
  }, {
    icon: 'http://...',
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'Описание недоступно',
  }];
  const resultArray = showSpecialAttacks(character);
  expect(resultArray).toEqual(expected);
});
