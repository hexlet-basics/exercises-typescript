
Sometimes we need to set a property or method that is common to all instances of that class. For example, to determine if an object is an instance of a class. In such a case, when declaring a method, we can specify the `static` keyword and it will be available through the class name:

```typescript
class CustomFile {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile.maxCustomFileSize;
  }

  constructor(private name: string, private size: number) {
    if (CustomFile.isCustomFileTooBig(size)) {
      throw new Error('CustomFile is too big');
    }
  }
}

CustomFile.isCustomFile(new CustomFile('open-world.jpeg', 1000)); // true
```

Static methods and properties can also be assigned the `public`, `protected` and `private` access modifiers and the `readonly` immutability modifier. This allows you to restrict the use of properties and methods to the current class or descendants only.

Unlike JavaScript, in TypeScript static properties and methods cannot be overridden in subclasses:

```typescript
class CustomFile {
  static maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }
}

class ImageCustomFile extends CustomFile {
  static maxCustomFileSize = 2000; // Error!

  static isCustomFile(file: CustomFile): boolean { // Error!
    return file instanceof ImageCustomFile;
  }
}
```
Such code cannot be compiled. The access to static properties and methods of the parent class remains:

```typescript
const file = new ImageCustomFile();
console.log(ImageCustomFile.maxCustomFileSize); // 1000
console.log(ImageCustomFile.isCustomFile(file)); // true
```
