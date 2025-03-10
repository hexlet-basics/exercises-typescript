import { expect, test } from 'vitest'
import CustomFile from './index';

test('CustomFile', () => {
  const file = new CustomFile({ name: 'foo.txt', size: 4000 });

  expect(file.name).toBe('foo.txt');
  expect(file.size).toBe(4000);
  expect(file.toString()).toBe('foo.txt (4000 bytes)');

  const file2 = new CustomFile(file);
  expect(file2.toString()).toBe('(copy) foo.txt (4000 bytes)');
});
