
Реализуйте класс `ImageCustomFile`, который расширяет (`extends`) класс `CustomFile` дополнительными приватными полями: `width`, `height`. Также переопределите метод `toString()`. Теперь он должен дополнительно выводить `<width>x<height>`.

```typescript
const imageCustomFile = new ImageCustomFile({
  name: 'image.png',
  size: 100,
  width: 200,
  height: 300,
});
console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300
```

Чтобы вызвать метод родительского класса, используйте `super.toString()`.
