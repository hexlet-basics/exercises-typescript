import File from './index';

test('File', () => {
  const file = new File('foo.txt', 4);

  expect(file.toString()).toBe('foo.txt (4 bytes)');
  expect(file.sizeInKb).toBe(4096);

  const file2 = new File('bar.txt', 8);
  expect(file2.toString()).toBe('bar.txt (8 bytes)');
  expect(file2.sizeInKb).toBe(8192);
});
