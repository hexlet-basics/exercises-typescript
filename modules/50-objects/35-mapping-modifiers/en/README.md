During type matching, you can change property attributes such as immutability and optionality. This is done using the corresponding modifiers: `readonly` and `?`.

To add or remove these modifiers, you can use the prefixes `+` or `-`. If no prefix is used, it is assumed that the modifier will be added, i.e. the default prefix is `+`.

Examples of using modifiers can be found in Utility Types:

```typescript
/**
 * Makes all properties of type `T` optional,
 * meaning it adds the `?` attribute.
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Makes all properties of type `T` mandatory,
 * meaning it removes the `?` attribute.
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Makes all properties of type `T` immutable,
 * meaning it adds the `readonly` attribute.
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

Similarly, you can also write a type that makes all properties of the type modifiable, that is, it removes the `readonly` attribute:

```typescript
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
```

Thanks to such types it is easier to create derived types from existing ones.

For example, an application may have a `User` type for an unauthorized user with all fields not required:

```typescript
type User = {
  id?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
};
```

It can be made into an authorised user using the `Required` type:

```typescript
type AuthorizedUser = Required<DefaultUser>;
```
