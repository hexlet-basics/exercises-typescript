import File from './index';

test('File', () => {
  const file = new File({ name: 'foo.txt', size: 4 });

  expect(file.name).toBe('foo.txt');
  expect(file.size).toBe(4);
  expect(file.toString()).toBe('foo.txt (4 bytes)');
});
