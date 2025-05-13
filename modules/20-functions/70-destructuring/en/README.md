
In this lesson, let's break down destructuring in function definition.

## Use of destructuring

**Destructuring** is a mechanism by which an object passed as an argument is unpacked and its parts are assigned to local function variables. In JavaScript, it looks like this:

```javascript
// Usual definition
const f = (user) => {
  console.log(user.firstName, user.age);
};

// Destructured object
const f = ({ firstName, age }) => {
  console.log(firstName, age);
};

const user = { firstName: 'Smith', age: 30 };
f(user); // => 'Smith', 30
```

A destructured object is visually similar to function parameters. However, it is still an object, so TypeScript describes its type after the closing curly brace:

```typescript
// Usual definition
function f(user: { firstName: string, age: number }) {
  console.log(user.firstName, user.age);
}

// Destructured object
function f({ firstName, age }: { firstName: string, age: number }) {
  console.log(firstName, age);
}
```

Here we have described the object type inside a function parameter and immediately destructured it.

If we put the type definition into an alias, you can make the code shorter:

```typescript
type User = {
  firstName: string;
  age: number;
}

function foo({ firstName, age }: User) {
  console.log(firstName, age);
}
```

The same `User` type will be able to be used elsewhere.

The same applies to arrays:

```typescript
// Usual definition
function foo(point: number[]) {
  console.log(point);
}

// Destructured array
function foo([x, y]: number[]) {
  console.log(x, y);
}

type Point = number[];

// With an alias
function foo([x, y]: Point) {
  console.log(x, y);
}
```

Using destructuring is convenient when you need to use several object properties or array elements inside a function. In this case, you can immediately extract them in the function parameters, instead of writing `user.firstName` or `point[0]` inside the function body.