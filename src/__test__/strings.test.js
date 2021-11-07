test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
  expect('team').toBe('team');
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});