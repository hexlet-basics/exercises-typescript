
Today we'll look at rest- and spread-operators.

## Rest Operator

The Rest operator allows you to create functions with a variable number of parameters, while collapsing them into an array:

```typescript
function max(...numbers: number[]): number {
  return Math.max(...numbers);
}
```

This array is a normal function parameter, so it is given a type according to what values are expected within this array. Example with two parameters:

```typescript
function do(operation: string, ...numbers: number[]) {
  // perform operation on all array members
}
```

In this sense, the rest operator in TypeScript is no different from the rest operator in JavaScript. But there is one peculiarity with the spread operator.

## Spread Operator

Spread-оператор в функциях — это как rest-оператор наоборот. Он позволяет раскладывать массив на отдельные параметры:

```typescript
const numbers = [1, 2, 3];
Math.max(...numbers);
```

Если функция принимает на вход любое количество аргументов, как в примере выше, то такой код работает без проблем. Но если функция принимает на вход определенное число аргументов, то TypeScript выдаст ошибку компиляции:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

// Выведенный тип number[] — "ноль или больше чисел",
// а не "массив из двух чисел"
const args = [1, 2];
sum(...args);
// A spread argument must either have a tuple type
// or be passed to a rest parameter.
```

В примере выше TypeScript не может понять, что массив `args` состоит из двух чисел. Массивы в JavaScript изменяемы, поэтому TypeScript не может полагаться на количество элементов в конкретный момент времени. Есть разные способы обойти это ограничение. Но в этой ситуации проще использовать Type Assertion — указание компилятору, что мы точно знаем о коде:

```typescript
const args = [1, 2] as const;
```

Подробнее о Type Assertion поговорим в модуле о типах. С его помощью мы явно указываем, что этот массив состоит из двух конкретных значений, которые не поменяются.
