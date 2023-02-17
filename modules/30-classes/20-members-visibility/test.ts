import ImageFile from './index';

test('ImageFile', () => {
  const imageFile = new ImageFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
  });

  expect(imageFile.toString()).toBe('image.png (100 bytes) 200x300');

  const imageFile2 = new ImageFile({
    name: 'image2.png',
    size: 400,
    width: 500,
    height: 600,
  });

  expect(imageFile2.toString()).toBe('image2.png (400 bytes) 500x600');
  // @ts-expect-error - private property
  expect(imageFile2.name).toBe('image2.png');
  // @ts-expect-error - private property
  expect(imageFile2.size).toBe(400);
  // @ts-expect-error - private property
  expect(imageFile2.width).toBe(500);
  // @ts-expect-error - private property
  expect(imageFile2.height).toBe(600);
});
