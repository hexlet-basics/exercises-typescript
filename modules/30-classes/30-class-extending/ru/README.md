
В этом уроке мы разберем наследование. Это механизм, который позволяет создавать подклассы на основе уже существующих классов. Подклассы наследуют свойства и методы родительского класса и могут расширять их.

В TypeScript наследование реализуется с помощью ключевого слова `extends`:

```typescript
// В TypeScript уже включен класс File, поэтому определим свой класс файла с именем CustomFile
class CustomFile {
  constructor(public name: string, public size: number) {}
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number, public width: number, public height: number) {
    super(name, size);
  }
}
```

Наследоваться можно только от одного класса. Но цепочка наследования может быть бесконечной. Например, класс `ImageCustomFile` наследуется от класса `CustomFile`, который может наследоваться от другого класса и так далее.

Вся цепочка наследования образует иерархию классов. Так как классы могут использоваться и как типы, иерархия классов полностью совпадает с иерархией типов. Подкласс является подтипом базового класса и может использоваться вместо него, при этом задавать более строгие ограничения.

```typescript
const file = new CustomFile('open-world.jpeg', 1000);
const image = new ImageCustomFile('open-world.jpeg', 1000, 100, 100);

const showImage = (image: ImageCustomFile) => {
...
};
showImage(file); // Error
```

<!-- TODO - автору: не хватает описания кода - на что обратить внимание, или что тут сделали -->

При наследовании можно переопределять методы родительского класса. При этом нужно либо сохранить сигнатуру метода, либо соблюдать некоторые правила:

- Типы параметров переопределенного метода бивариантны
- Тип возвращаемого значения переопределенного метода ковариантен

<!-- TODO - автору: а студенты поймут, что значит бивариантны и ковариантен? Если нет, нужно объяснить -->

Родительский метод принимает `string` и возвращает `string`. Переопределенный метод должен иметь более широкий или более узкий тип, например, `string | null` или `'some string'`. Возвращать же должен более узкий тип, например, `'some string'`:

```typescript
class CustomFileFactory {
  createCustomFile(name: string, size: number): CustomFile {
    return new CustomFile(name, size);
  }
}

class ImageCustomFileFactory1 extends CustomFileFactory {
  createCustomFile(name: string, size: number): ImageCustomFile { // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}

class ImageCustomFileFactory2 extends CustomFileFactory {
  createCustomFile(name: 'file', size: number): CustomFile { // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}  

class ImageCustomFileFactory3 extends CustomFileFactory {
  createCustomFile(name: number, size: number): CustomFile { // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}


class ImageCustomFileFactory3 extends CustomFileFactory {
  createCustomFile(name: string, size: number): {} { // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}
```

<!-- TODO - автору: не хватает описания кода - на что обратить внимание, или что тут сделали -->
