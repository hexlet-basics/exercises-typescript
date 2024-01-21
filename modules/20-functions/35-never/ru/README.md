
В этом уроке познакомимся с типом `never`. 

## Использование типа never

Тип `never` используется, когда функция гарантированно ничего не возвращает. Например, если внутри функции есть бесконечный цикл:

```typescript
function infiniteLoop(): never {
  while (true) {
    // Какая-то логика
  }
}
```

Мы явно указали, что функция `infiniteLoop` ничего не возвращает.

Еще тип `never` используется, если функция выбрасывает исключение:

```typescript
function stop(message: string): never {
  throw new Error(message);
}
```

Также тип `never` используется, когда функция завершает программу:

```typescript
function exit(code: number = 0): never {
  process.exit(code);
}
```

Важным условием для `never` является отсутствие нормального завершения функции. Например, в примере ниже компилятор выдаст ошибку:

```typescript
// A function returning 'never' cannot have a reachable end point.
function printSomething(): never {
  console.log('hexlet');
}
```

Функция `printSomething()` ничего не возвращает явно. Но так как она завершается в принципе, JavaScript подставляет неявный возврат `undefined`.

`never` автоматически выводится даже там, где прописан явный возврат. Но компилятор видит, что этот возврат невозможен:

```typescript
function fail() { // Автоматически выводится never
  // функция exit, определенная выше, имеет возвращаемый тип never
  return exit(1);
}
```
