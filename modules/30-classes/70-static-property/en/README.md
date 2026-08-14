
Sometimes we need to set a property or method that is common to all instances of that class. For example, to determine if an object is an instance of a class. In such a case, when declaring a method, we can specify the `static` keyword, and it will be available through the class name:

```typescript
class CustomFile {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile.maxCustomFileSize;
  }

  constructor(
    private name: string,
    private size: number,
  ) {
    if (CustomFile.isCustomFileTooBig(size)) {
      throw new Error("CustomFile is too big");
    }
  }
}

CustomFile.isCustomFile(new CustomFile("open-world.jpeg", 1000)); // true
```

Static methods and properties can also be assigned the `public`, `protected` and `private` access modifiers and the `readonly` immutability modifier. This allows you to restrict the use of properties and methods to the current class or descendants only.

Static properties and methods are inherited, and a subclass can override them — just like in JavaScript:

```typescript
class CustomFile {
  static maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }
}

class ImageCustomFile extends CustomFile {
  static maxCustomFileSize = 2000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof ImageCustomFile;
  }
}

const file = new ImageCustomFile();

console.log(ImageCustomFile.maxCustomFileSize); // 2000
console.log(ImageCustomFile.isCustomFile(file)); // true
```

Here `ImageCustomFile` declared its own `maxCustomFileSize` and `isCustomFile`, and accessing them through the subclass name gives exactly those.

TypeScript adds one requirement on top: the type of an overridden property or method has to stay compatible with the parent one. Replace the number with a string and the code will not compile:

```typescript
class TextCustomFile extends CustomFile {
  static maxCustomFileSize = "unlimited"; // Error!
}
```

The compiler says `Class static side 'typeof TextCustomFile' incorrectly extends base class static side 'typeof CustomFile'`: the static side of the subclass no longer fits the static side of the parent.

A subclass that overrides nothing uses the static properties and methods of its parent:

```typescript
class VideoCustomFile extends CustomFile {}

console.log(VideoCustomFile.maxCustomFileSize); // 1000
```
