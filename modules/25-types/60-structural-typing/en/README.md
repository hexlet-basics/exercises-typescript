
In JavaScript, it is possible to work with objects and classes in the same way. You don't need to rely on inheritance or interfaces. You only need the expected fields and methods. This approach is called duck typing. What walks like a duck and quacks like a duck is a duck:

```javascript
const user = {
  firstName: 'Vasiliy',
  lastName: 'Kuzenkov',
  type: 'user'
}

const admin = {
  firstName: 'Kirill',
  lastName: 'Mokevnin',
  type: 'admin'
}

const formatUser = (user) => [user.type, ':', user.firstName, user.lastName].join(' ');

formatUser(user); // ok
formatUser(admin); // ok
```

In languages like Java we would need to define an interface, then implement it separately for the `User` and `Admin` classes. And in the formatting method parameters the argument type would be this interface.

Another option is to write an overloaded method for these two cases. Languages with this behavior use nominative typing - nominative typing.

To organize the nominative typing approach in Java, you need to write a lot of extra code.

To simplify the transition from JavaScript to TypeScript and to use checks before code execution, the structural typing approach was chosen. This is what we will be introduced to in this tutorial.

With structural typing, we can easily rewrite our example in TypeScript:

```typescript
const user = {
  firstName: 'Vassiliy',
  lastName: 'Kuzenkov',
  type: 'user'
}

const admin = {
  firstName: 'Kirill',
  lastName: 'Mokevnin',
  type: 'admin'
}

type User = {
  type: string,
  firstName: string,
  lastName: string
}

const formatUser = (user: User): string =>
  [user.type, ':', user.firstName, user.lastName].join(' ');

formatUser(user); // ok
formatUser(admin); // ok
```

We have created the `User` type, which describes the expected structure of the object. In the `formatUser` function we specified that the expected argument must correspond to the `User` type. Thus the `formatUser` function accepts only objects that contain all fields from the `User` object type.

It is important to remember that structural typing does not protect us from the presence of additional fields in an object:

```typescript
const moderator = {
  firstName: 'Danil',
  lastName: 'Polovinkin',
  type: 'moderator',
  email: 'danil@polovinkin.com'
}

type User = {
  type: string,
  firstName: string,
  lastName: string
}

const formatUser = (user: User): string =>
  [user.type, ':', user.firstName, user.lastName].join(' ');

formatUser(moderator); // ok
```

Even though we did not specify the `email` field in the `User` type, TypeScript will still not generate an error, because the `moderator` object has all the fields that are described in the `User` type.

In structural typing, you can think of an object type as a description of a structure that imposes constraints on the values assigned. Or as a set of objects that can be assigned to a variable with this type.

![object](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/60-structural-typing/assets/structual_object.png)

The fewer fields there are in an object type, the less specific constraints are placed on the assigned value. On sets, this means that an object type with additional fields will be a subset of an object type without these fields. If we talk about type contraction and expansion in object types, the extra fields narrow the type.

Similarly to operations with sets for object types, we can form an understanding of intersection and union in structural typing.

When merging `|` we expand the type - we increase the number of allowed values for the type. And when intersecting `&` - we narrow it. Thus, we reduce the number of allowed values:

```typescript
type IntersectionUser = {
  username: string;
  password: string;
} & {
    type: string;
}

const admin: IntersectionUser = {  // a match with an object type is required both to the left and to the right of the & operator
  username: 'test',
  password: 'test',
  type: 'admin'
}

type UnionUser = {
    username: string;
    password: string;
} | {
    type: string;
}

const user: UnionUser = { username: 'test', type: 'user' } // a match with one of the object types is sufficient
```

The resulting type `IntersectionUser` describes objects that contain the fields `username`, `password` and `type`. And `UnionUser` type describes objects that contain `username` and `password` **OR** `type` fields.

![object intersection](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/60-structural-typing/assets/structual_object.png)

In set algebra, the intersection of two sets is also called logical multiplication. For types, the term 'product type' is used. The union of sets is also called logical addition, and for types, the 'tagged union'.

Try to answer what will happen if you use two object types with the same field name but different types in the intersection. This is a common mistake due to inattention or insufficient understanding of types as sets.

<details>
  <summary>Answer</summary>
When fields with the same names are encountered when intersecting object types, the resulting types of these fields will also be intersected, and the resulting type will be never.
</details>

When using unified types in functions, the following point should be taken into account. Let's consider an example:

```typescript
const user: UnionUser = { username: 'test', type: 'user' };

const func = (user: UnionUser) => {
  console.log(user.type);
};
```

The compiler will generate an error, because the type in the `user` variable can refer to either the left type or the right type. As a result, there is no guarantee that the `user` object will have any of the properties.
