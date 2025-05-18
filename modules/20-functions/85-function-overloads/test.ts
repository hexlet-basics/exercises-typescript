import { expect, test } from 'vitest'
import sayHello from './index';

test('function', () => {
  expect(sayHello('John')).toBe('Hi John! Happy New Year!');
  expect(sayHello(2023, 'Mila')).toBe('Hi Mila! Happy New Year 2023!');
});
