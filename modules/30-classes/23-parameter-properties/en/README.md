
Filling properties from constructor parameters is a common task when working with classes. That's why TypeScript has added a special syntax that allows you to do this automatically:

```typescript
class SomeClass {
  constructor(public one: number, private two: string) {}

  get three(): string {
    return `${this.one} ${this.two}`;
  }
}
```

This code does the same thing as this code:

```typescript
  class SomeClass {
    public one: number;

    private two: string;

    constructor(one: number, two: string) {
      this.one = one;
      this.two = two;
    }

    get three(): string {
        return `${this.one} ${this.two}`;
    }
  }
```

The new syntax makes it possible not to duplicate the code for filling properties from parameters and makes it more concise. If there is some logic in the constructor, the properties still need to be filled in manually.
