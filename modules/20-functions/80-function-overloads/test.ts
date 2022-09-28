import sayHello from './index';

test('function', () => {
  expect(sayHello('John')).toBe('Hi John');
  expect(sayHello('Mila', 'Mala')).toBe('Hello Mila Mala');
});
