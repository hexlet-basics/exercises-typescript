import { expect, test } from 'vitest'
import CustomFile from './index';

test('CustomFile', () => {
  const file = new CustomFile('foo.txt', 4);

  expect(file.toString()).toBe('foo.txt (4 bytes)');

  const file2 = new CustomFile('bar.txt', 8);
  expect(file2.toString()).toBe('bar.txt (8 bytes)');
});
