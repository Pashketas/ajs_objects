import orderByProps from '../orderByProps';

const object = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('check the function', () => {
  const order = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const orderedArray = orderByProps(object, order);
  expect(orderedArray).toEqual(expected);
});

test('throwing error', () => {
  const order = ['name', 'upgrade'];
  expect(() => orderByProps(object, order)).toThrow('Таких элементов не существует в исходном массиве');
});
