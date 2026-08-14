
Реализуйте класс `CustomFile`, в конструктор которого передается объект с именем файла и размером в байтах или другой файл. Как и в прошлом уроке, `name` и `size` остаются публичными полями и доступны снаружи, а вот признак копии наружу отдавать не нужно — храните его в приватном поле.

Внутри класса определите метод `toString()`, который должен вернуть форматированную строку в формате `(copy) <file-name> (<size> bytes)`. `(copy)` должно выводиться только в том случае, если файл является копией другого файла.

```typescript
const file = new CustomFile({ name: "open-world.jpeg", size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)
```
