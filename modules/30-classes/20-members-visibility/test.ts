import ImageCustomFile from './index';

test('ImageCustomFile', () => {
  const imageCustomFile = new ImageCustomFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
  });

  expect(imageCustomFile.toString()).toBe('image.png (100 bytes) 200x300');

  const imageCustomFile2 = new ImageCustomFile({
    name: 'image2.png',
    size: 400,
    width: 500,
    height: 600,
  });

  expect(imageCustomFile2.toString()).toBe('image2.png (400 bytes) 500x600');
  // @ts-expect-error - private property
  expect(imageCustomFile2.name).toBe('image2.png');
  // @ts-expect-error - private property
  expect(imageCustomFile2.size).toBe(400);
  // @ts-expect-error - private property
  expect(imageCustomFile2.width).toBe(500);
  // @ts-expect-error - private property
  expect(imageCustomFile2.height).toBe(600);
});
