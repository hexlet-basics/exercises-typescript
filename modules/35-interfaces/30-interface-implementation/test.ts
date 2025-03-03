import { expect, test } from 'vitest'
import Phonebook from './index';

test('myBook', () => {
  const myBook = new Phonebook();
  myBook.set('test1', 1);
  expect(myBook.get('test1')).toBe(1);
  expect(myBook.get('test2')).toBe(null);
});
