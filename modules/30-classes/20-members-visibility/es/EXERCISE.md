
Implementa la clase `ImageCustomFile`, que extiende (`extends`) la clase `CustomFile` con los campos privados adicionales `width` y `height`. Además, sobrescribe el método `toString()`. Ahora debe mostrar también `<width>x<height>`.

```typescript
const imageCustomFile = new ImageCustomFile({
  name: "image.png",
  size: 100,
  width: 200,
  height: 300,
});
console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300
```

Para llamar al método de la clase padre, usa `super.toString()`.
