
In this lesson, we will learn about anonymous functions. Together with arrow functions, they are usually used in the same place where they are defined. Because of this, TypeScript can output the types of their parameters.

To define anonymous functions, the type indication is omitted:

```typescript
const fruits = ['banana', 'mango', 'apple'];
const upperFruits = fruits.map((name) => name.toUpperCase());
// ['BANANA', 'MANGO', 'APPLE']
```

This process is called **contextual typing** because the context of the function definition allows you to deduce the types of input parameters. As a result, the code looks identical to JavaScript code.

If a function is defined out of context, the same rules apply as to named functions. Parameter types must be specified at the time of definition:

```typescript
const toUpper = (name: string): string => name.toUpperCase();
const upperFruits = fruits.map(toUpper);
```

## Conclusions

In this lesson, we looked at how to define anonymous functions and use them in different contexts. Anonymous functions can make code more readable and understandable.