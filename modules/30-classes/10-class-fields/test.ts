import { expect, test } from 'vitest'
import CustomFile from './index';

test('CustomFile', () => {
  const file = new CustomFile({ name: 'foo.txt', size: 4 });

  expect(file.name).toBe('foo.txt');
  expect(file.size).toBe(4);
  expect(file.toString()).toBe('foo.txt (4 bytes)');
});
