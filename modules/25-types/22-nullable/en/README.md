
In TypeScript, `null` and `undefined` are more than just values. They are two types, each consisting of a single value. Imagine TypeScript worked the same way as JavaScript. Then these values could be passed anywhere, no matter what is expected there: a string, an array, and so on.

Everything would be fine until the code is executed. At that moment, we would get an error because the function expected an array and received `null` or `undefined`. This problem exists in JavaScript, for example:

```javascript
function foo(value) {
  const upperValue = value.toUpperCase();
  // The rest of the logic
}

foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```

In statically typed languages where `null` is used as a common type for everything, type checking won't give you any hint. In this case, a `NullPointerException` is thrown, one of the most memorable exceptions for every user. That's why the code starts getting overgrown with `null` checks:

```java
public void doSomething(SomeObject obj) {
  if(obj != null) {
    obj.myMethod();
  }
}

doSomething(null);
```

This Java example shows that `null` can be passed anywhere an object is expected. So inside the function, we have to check that `obj` is not `null`. Without this check, we would get a `NullPointerException`.

In TypeScript with the correct (`strict`) configuration, such a check is built in, and the static analyzer will point out the possible problem:

```typescript
function foo(value?: string | null) {
  const upperValue = value.toUpperCase(); // Object is possibly 'null' or 'undefined'.
  // The rest of the logic
}
```

Here we got a compilation error because `value` can be `null` or `undefined`.

To fix it, we need to write the appropriate condition or use the `?.` operator. This helps avoid errors at runtime:

```typescript
function foo(value?: string | null) {
  if (value !== null && value !== undefined) {
    const upperValue = value.toUpperCase(); // (parameter) value: string
  }
  // The rest of the logic
}
```

This became possible because `null` and `undefined` are separate types. With each check, we cut off a set of values we don't need and get a safe method call. Such checks are also called _Type Guards_ or _Differentiating Types_.
