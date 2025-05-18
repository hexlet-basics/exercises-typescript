
In JavaScript, we can use strings, numbers, and characters as keys in objects. TypeScript imposes the same restrictions on its object types. And we have to learn how to work with them.

In this course, we have already worked with object types and with interfaces where field names are predefined. Now we will learn the syntax for dynamic keys:

```typescript
type dynamicKeysObject = {
  [key: string | number | symbol]: unknown;
};
```

Here we have declared an object type `dynamicKeysObject`, where the key can be any type from the available data types `key: string | number | symbol`. Let's try to specify such type for a variable:

```typescript
const obj: dynamicKeysObject = {
  name: 'John',
  age: 30,
  0: 'zero',
  [Symbol('secret')]: 'symbol',
};
```

Dynamic keys can also be used in conjunction with explicitly specified fields. In this case, the restrictions of dynamic fields will also apply to them:

```typescript
type MyTheme = {
  palette: {
    primary: 'red' | 'green' | 'blue';
    [key: string]: string;
  },
  [key: string]: unknown;
};

const theme = {
  palette: {
    primary: 'red',
  },
  spacing: {
    small: 8,
  },
} satisfies MyTheme;
```

In the example, we explicitly specified a type for the `palette` field, got a valid type check with `satisfies` and still left enough freedom to extend the topic further.

The same syntax and behavior for dynamic keys in interfaces:

```typescript
interface MyTheme {
  palette: {
    primary: string;
  };
  [key: string]: unknown;
}
```

In index classes signature can be used for both normal fields and `static` fields:

```typescript
class Template {
  static [propName: string]: string | number;

  [key: string]: string;
}

Template.test = 'test';

const template = new Template();
template.test = 'test';
```

## Template String Literal

Dynamic keys are useful where we don't know all the possible field names of an object, but we still want to restrict their type. In TypeScript, a key type can also be a wildcard literal. For example, if we want to declare a listener type and require that all its methods start with the word `on`:

```typescript
type Listeners = {
  [key: `on${string}`]: (value: unknown) => void
}

const streamListeners: Listeners = {
  onStart() {},
  onFinished() {}
}
```

The ``on${string}`` literal type tells us that we expect a string based on the pattern ‘starts with `on` and any string thereafter’. This technique is called Template String Literal and is used to impose constraints when typing strings.

If we look at a typical web application, we find that we know the structure of most objects from the beginning. Therefore, the use of dynamic keys can often be seen in libraries and in a number of auxiliary functions that we will look at in the following lessons.