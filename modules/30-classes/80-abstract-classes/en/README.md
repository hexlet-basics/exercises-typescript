When we need to define a common behavior for several classes, it is convenient to use abstract classes, which we will explore in this lesson.

Although abstract classes cannot be created directly, they can be inherited. They can also specify explicitly which method should be implemented in the inheritors:

```typescript
abstract class CustomFile {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  sizeInKb(): number {
    return this.size / 1024;
  }
}

class ImageCustomFile extends CustomFile {
  constructor(name: string, size: number) {
    super(name, size);
  }
}
```

To take the common part of code out of classes, abstract classes are actively used to build application architecture and frameworks. For example, React has a class `Component` which can be represented as an abstract class. We can't create it directly, but it requires inheritors to implement the `render` method. This allows us to create components that will be rendered on initialization:

```typescript
abstract class Component {
  abstract render(): void;

  constructor() {
    this.render();
  }
}
```
