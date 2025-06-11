
In this lesson, we will look at inheritance. This is a mechanism that allows you to create subclasses based on existing classes. Subclasses inherit the properties and methods of the parent class and can extend them.

In TypeScript, inheritance is implemented using the `extends` keyword:

```typescript
// TypeScript already includes a File class, so let's define our own file class named CustomFile
class CustomFile {
  constructor(public name: string, public size: number) {}
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number, public width: number, public height: number) {
    super(name, size);
  }
}
```

You can only inherit from one class. But the chain of inheritance can be infinite. For example, the `ImageCustomFile` class inherits from the `CustomFile` class, which can inherit from another class and so on.

The whole chain of inheritance forms a class hierarchy. Since classes can also be used as types, the class hierarchy is completely the same as the type hierarchy. A subclass is a subtype of the base class and can be used instead of it, while specifying stricter restrictions.

```typescript
const file = new CustomFile('open-world.jpeg', 1000);
const image = new ImageCustomFile('open-world.jpeg', 1000, 100, 100);

const showImage = (image: ImageCustomFile) => {
...
};
showImage(file); // Error
```

When inheriting, you can override methods of the parent class. In doing so, you must either preserve the method's signature or follow certain rules:

- The parameter types of the overridden method are bivariant
- The return type of the overridden method is covariant

The parent method accepts `string` and returns `string`. The overridden method must have a broader or narrower type, e.g. `string | null` or `“some string”`. The return must be of a narrower type, e.g., `“some string”`:

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
