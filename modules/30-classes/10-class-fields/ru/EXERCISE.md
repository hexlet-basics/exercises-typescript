
Реализуйте класс `CustomFile`, в конструктор которого передается объект с полями: `name` — именем файла, и `size` — размером в байтах. Внутри класса определите метод `toString()`, который должен вернуть форматированную строку в формате `<file-name> (<size> bytes)`.

```typescript
const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)
```
