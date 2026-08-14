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

Статическим методам и свойствам также можно назначить модификаторы доступа `public`, `protected` и `private` и модификатор неизменяемости `readonly`. Это позволяет ограничить использование свойств и методов только текущим классом или наследниками.

Статические свойства и методы наследуются, и подкласс может их переопределить — так же, как в JavaScript:

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

Здесь `ImageCustomFile` объявил свои `maxCustomFileSize` и `isCustomFile`, и обращение по имени подкласса даёт именно их.

TypeScript добавляет к этому одно требование: тип переопределённого свойства или метода должен остаться совместимым с родительским. Если вместо числа подставить строку, код не скомпилируется:

```typescript
class TextCustomFile extends CustomFile {
  static maxCustomFileSize = "unlimited"; // Error!
}
```

Компилятор скажет `Class static side 'typeof TextCustomFile' incorrectly extends base class static side 'typeof CustomFile'`: статическая часть подкласса перестала подходить под статическую часть родителя.

Подкласс, который ничего не переопределяет, пользуется статическими свойствами и методами родителя:

```typescript
class VideoCustomFile extends CustomFile {}

console.log(VideoCustomFile.maxCustomFileSize); // 1000
```
