
Реализуйте класс `CustomFile`, в конструктор которого передается имя файла и размер в байтах. Внутри класса определите метод `toString()`, который должен вернуть форматированную строку в формате `<file-name> (<size> bytes)`. Используйте свойства параметров для заполнения свойств класса.

```typescript
const file = new CustomFile('open-world.jpeg', 1000);
console.log(file.toString()); // open-world.jpeg (1000 bytes)
```
