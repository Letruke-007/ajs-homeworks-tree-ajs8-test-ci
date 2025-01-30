import healthBarStatus from '../healthBarStatus';

test.each([
  ['Маг', 90, 'healthy'],
  ['Лучник', 30, 'wounded'],
  ['Рыцарь', 10, 'critical'],
])('testing the healthBarStatus function with name %s and health %i', (name, health, expected) => {
  const result = healthBarStatus({ name, health });

  expect(result).toBe(expected);
});