
In this lesson, we will look at the use of interfaces. In the previous lesson we told you that their work is similar to the work of types in TypeScript. But they have their own peculiarities, which we will touch upon today.

## Extending an interface with additional fields

If an interface needs to be extended with additional fields after it has been initialized, we can re-declare the interface with new properties. This method is called **merging declarations**:

```typescript
interface IUser {
  rating: number;
}

interface IUser {
  nickname: string;
  birthdate: number;
}

const sergey: IUser = {
  nickname: 'Sergey',
  birthdate: 1990,
  rating: 1102,
}
```

Here we created the `IUser` interface and then extended it with new properties for demonstration purposes. After that we created `Sergey` object on its basis.

Let's consider another way of working with an interface.

## Extending an interface using another interface

We can extend an interface by creating another interface that inherits from it:

```typescript
interface IStudent extends IUser {
  group: number;
}

const sergey: IStudent = {
  nickname: 'Sergey',
  birthdate: 1990,
  rating: 1102,
  group: 2,
}
```

In this example, we have created another one based on our previous interface `IUser` - `IStudent`, to which we have added the `group` property. So the interface `IStudent` has all the properties of `IUser` and all the properties we specified when extending it from `IUser`, i.e. additionally `group`.

Now let's look at how to work with multiple interfaces.

## Extending multiple interfaces

More interfaces can extend several other interfaces at once:

```typescript
interface IUser {
  nickname: string;
  rating: number;
}

interface IEditor {
  courses: [string];
  canEdit: boolean;
}

interface IAuthor extends IUser, IEditor {
  team: string;
}

const sergey: IAuthor = {
  nickname: 'Sergey',
  rating: 20,
  courses: ['typescript'],
  canEdit: true,
  team: 'Hexlet College'
}
```

In the example above, we created an instance based on the `IAuthor` interface, which was created by extending the `IUser` and `IEditor` interfaces. This instance took all the properties of these interfaces and the property we specified when we created the `IAuthor` interface itself.

## Creating intersection types

TypeScript also allows us to create intersection types from multiple interfaces using the `&` literal:

```typescript
interface IOneWay {
  one: string;
}

interface IOrAnother {
  another: string;
}

type OneWayOrAnother = IOneWay & IOrAnother;

const example: OneWayOrAnother = {
  one: 'A',
  another: 'B',
}
```

Here we have created the type `OneWayOrAnother` based on two interfaces using the `&` literal. This type includes all properties of the specified interfaces.

There are no significant differences between creating cross-types and extending interfaces. Almost always these actions will be interchangeable, so it is more a matter of convenience. But there are exceptions where [interface extension behaves differently from cross-type creation](https://stackoverflow.com/questions/52681316/difference-between-extending-and-intersecting-interfaces-in-typescript).

It may happen that we don't know in advance all the properties that our interface will contain. But we know their possible contents. In such a case, it is convenient to use a special index signature, which allows us to describe the types of possible values:

```typescript
interface IPhoneBook {
  [index:string]: number;
}

const myNotePad: IPhoneBook = {
  ivan: 55531311,
  sergey: 55500110,
  mom: 55522111,
}
```

In the example above, we solved the issue of creating a phone book by using an index signature. This allowed us not to specify many properties with names, but only once to specify the key type and its value type.

## Conclusions

Interfaces are another powerful tool in TypeScript along with types. It allows us to describe our data in a flexible way. It also lends itself conveniently to being extended and combined with other types or interfaces.
