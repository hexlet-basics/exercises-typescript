
Иногда нам требуется задать свойство или метод, который будет общим для всех экземпляров этого класса. Например, чтобы определить, является ли объект экземпляром класса. В таком случае при объявлении метода мы можем указать ключевое слово `static`, и он станет доступен через имя класса:

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

<!-- TODO - автору: не хватает описания кода - на что обратить внимание, или что тут сделали -->

Статическим методам и свойствам также можно назначить модификаторы доступа `public`, `protected` и `private` и модификатор неизменяемости `readonly`. Это позволяет ограничить использование свойств и методов только текущим классом или наследниками.

В отличии от JavaScript в TypeScript статические свойства и методы не могут быть переопределены в подклассах:

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

<!-- TODO - автору: не хватает описания кода - на что обратить внимание, или что тут сделали -->

Такой код не удастся скомпилировать. При этом остается доступ к статическим свойствам и методам родительского класса:

```typescript
const file = new ImageCustomFile();
console.log(ImageCustomFile.maxCustomFileSize); // 1000
console.log(ImageCustomFile.isCustomFile(file)); // true
```

<!-- TODO - автору: не хватает описания кода - на что обратить внимание, или что тут сделали -->
