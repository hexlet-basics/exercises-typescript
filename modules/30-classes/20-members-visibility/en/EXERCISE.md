
Implement the `ImageCustomFile` class, which extends (`extends`) the `CustomFile` class with additional private fields: `width`, `height`. Also override the `toString()` method. Now it should additionally output `<width>x<height>`.

```typescript
const imageCustomFile = new ImageCustomFile({
  name: 'image.png',
  size: 100,
  width: 200,
  height: 300,
});
console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300
```

To call a method of a parent class, use `super.toString()`.
