
In the definition of a variable, we usually do not specify its type, as it is derived automatically. This does not work with functions. You must specify the types of all input parameters for them.

In this tutorial we will learn how to make a parameter optional, whether something should be done with the default value of a variable, and how to output the type of the return value.

## Mandatory parameter

Let's define the function and specify the type of input parameter:

```typescript
function getGreetingPhrase(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}
```

When specified like this, the parameter will be mandatory. If you call a function without a parameter, it will cause a compilation error:

```typescript
// Expected 1 arguments, but got 0.
getGreetingPhrase();
```

## Optional parameter

To make a parameter optional, you must add a “?” after the variable name:

```typescript
function getGreetingPhrase(name?: string) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}

getGreetingPhrase('Mike'); // Hello, MIKE!
getGreetingPhrase(); // Hello, Guest!
```

In this case, the type of the `name` variable becomes composite (Union Type): `string | undefined` - string or undefined.

An optional parameter can be `undefined` but not `null`. To add `null`, you need to change the definition like this:

```typescript
function getGreetingPhrase(name?: string | null) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
```

Here we have extended the type definition of the variable `name` to `string | undefined | null`.

## Default value

With the default value, you do not need to specify anything additional. The value is set as in JavaScript. The variable itself automatically becomes optional, and the type is inferred based on the passed value:

```typescript
function getGreetingPhrase(name = 'Guest') {
  return `Hello, ${name.toUpperCase()}!`;
}

getGreetingPhrase() // Hello, GUEST!
```

## Return value type

In many cases, TypeScript outputs the type of the return value by itself, but it can be specified explicitly:

```typescript
function getGreetingPhrase(name: string): string {
  return `Hello, ${name.toUpperCase()}!`;
}
```

The returned type can be inferred, but sometimes the [resulting type](https://stackoverflow.com/questions/70001511/why-specify-function-return-types) is not what we expect. For this reason, we always recommend writing the type explicitly. This simplifies documentation and protects the code from accidental changes.

## Conclusions

In this lesson, we learned how to make a parameter optional, how to work with the default value of a variable, and how to output the type of the return value.