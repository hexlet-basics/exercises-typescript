
Implement the `CustomFile` class, which constructor is passed an object with the fields: `name` - the name of the file, and `size` - the size in bytes. Inside the class, define the `toString()` method, which should return a formatted string in the format `<file-name> (<size> bytes)`.

```typescript
const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)
```
