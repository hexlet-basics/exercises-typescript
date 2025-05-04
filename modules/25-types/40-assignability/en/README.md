
In this lesson, we will look at assigning one value to another. This is one of the basic variable operations in most languages. The most common error you will encounter in TypeScript is `Error: Type X is not assignable to type Y.`. This kind of code fails to compile, so you need to figure out how to fix it.

Assigning one value to another and passing it as an argument to a function is called **assignability**:

```typescript
let x: number;
const y: number = 10;
x = y;

function len(str: string): number {
  return str.length;
}
len(false); // Error!
```

When assigning `x = y;` and passing the argument `f(false);`, one first checks whether the variable can contain the type being passed - whether the type `x` is compatible with the type `y`.

If we think of types as sets of values, assignability is a check that the set of values of `x` is included in the set of values of `y`. For example, the literal type `‘one’` is included in the set of values of `string`, but the set of values of `number` is not.

A variable of type `x` is assigned to a variable of type `y` if the set of values of `x` is included in the set of values of `y`. Or in other words - if the set of `x` values is a subset of the set of `y` values.

So the next time you encounter the error `Type X is not assignable to type Y.`, don't immediately reduce everything to the most general type through `as any`. After all, in this case you completely disable type checking for this variable.

You should first understand what is expected as input and what the function returns. And only after that you can modify your own types: expand the allowable types, for example, with the help of a union and only in extreme cases use the `any` hack.

To understand what can be assigned to what in TypeScript, you need to look at the code from the point of view of type hierarchy and structural typing. This is the focus of the next lessons in this course.
