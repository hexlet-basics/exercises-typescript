
Sometimes we need to restrict the input parameter of a function to the type ‘any object’. For example, we need this for a function that checks for the presence of keys in an object. There are several ways to do this check, but not all of them work as expected.

Let's look at an example:

```typescript
// {} is used as the type
function toString(obj: {}) {
  return obj.toString();
}

toString('wow'); // Ok!
toString(123); // Ok!
toString({}); // Ok!
```

An empty object type `{}` implies an object of any structure and restricts the set of all values except `null` and `undefined`. An empty interface works the same way as an empty object type. It is not what we would expect.

The `Object` type is an object type. It works just like the `{}` type with some differences. It predefines the types of some built-in methods, such as `toString()`, while the `{}` type does not. For example:

```typescript
const foo: {} = {
  toString() {
   return 1; // Ok!
  }
};

const bar: Object = {
  toString() {
    return 1; // Error!
  }
};
```

The second definition of `bar` doesn't work because the `Object` type specifies that the `toString()` method should return a string.

If we want to work with non-primitive values, there is another type `object` (with a small letter) for that:

```typescript
function toString(obj: object) {
  return obj.toString();
}

toString('wow'); // Error!
toString(123); // Error!
toString({}); // Ok!
```

With the help of `object` type it is impossible to get access to object properties. Other mechanisms are used for such a task.
