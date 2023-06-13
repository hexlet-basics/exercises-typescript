import extract from './index';

test('extract', () => {
  const obj = {
    name: 'John',
    age: 30,
    address: {
      street: 'Main Street',
      number: 123,
    },
  };

  expect(extract(obj, ['name', 'address'])).toEqual({
    name: 'John',
    address: obj.address,
  });

  expect(extract(obj, ['name', 'lastName'])).toEqual({
    name: 'John',
  });
});
