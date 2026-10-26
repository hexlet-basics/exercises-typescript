
When we need to define a common behavior for several classes, it is convenient to use abstract classes, which we will explore in this lesson.

You cannot create an instance of an abstract class directly, but you can inherit from it. An abstract class can also specify explicitly which method should be implemented in the inheritors:

```typescript
abstract class CustomFile {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  // Ready implementation, the subclass inherits the method as is
  sizeInKb(): number {
    return this.size / 1024;
  }

  // Signature only, the subclass must implement the method
  abstract open(): void;
}

class ImageCustomFile extends CustomFile {
  // Without open() TypeScript reports a compilation error
  open(): void {
    console.log(`Opening image ${this.name}`);
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
