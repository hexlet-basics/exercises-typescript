import File from './index';

test('File', () => {
  const file = new File({ name: 'foo.txt', size: 4000 });

  expect(file.name).toBe('foo.txt');
  expect(file.size).toBe(4000);
  expect(file.toString()).toBe('foo.txt (4000 bytes)');

  const file2 = new File(file);
  expect(file2.toString()).toBe('(copy) foo.txt (4000 bytes)');
});
