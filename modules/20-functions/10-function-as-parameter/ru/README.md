
В TypeScript используется несколько способов типизировать функции, которые передаются как параметры. В этом уроке мы научимся работать с ними.

## Как типизировать функции, которые передаются как параметры

Самый простой способ типизировать функции как параметры — использовать тип `Function`. Он описывает функцию JavaScript со всеми ее особенностями, включая свойства `bind`, `call` и `apply`.

Опишем входной параметр `callback` функции `process`:

```typescript
function process(callback: Function) {
  const value = callback();
  // ...
}
```

`Function` отключает проверку типов для вызываемой функции. В итоге количество и тип входных аргументов не проверяются, а результатом работы такой функции будет `any`. Это может привести к логическим ошибкам и неожиданному поведению:

```typescript
process(Math.round); // ?
```

Данный пример сработает, хотя поведение вряд ли будет ожидаемым, так как `Math.round` вызовется без аргументов и вернет `NaN`. Поэтому мы рекомендуем избегать использования `Function`.

Другой способ описывать функции — использовать стрелочную функцию с указанием входных и выходных типов:

```typescript
function process(callback: () => string) {
  // value имеет тип string
  const value = callback();
  // ...
}

process(Math.round);
// Argument of type '(x: number) => number' is not
// assignable to parameter of type '() => string'.
```

Определение стрелочной функции похоже на настоящую, но тут важно не перепутать. Здесь мы видим именно описание типа, а не определение функции.

Рассмотрим еще несколько примеров для закрепления:

```typescript
function process(callback: () => number)
function process(callback: () => string[])
function process(callback: () => { firstName: string; })
```

Параметры синтаксически указываются так же, как и для стрелочных функций:

```typescript
function process(callback: (n: number) => string) {
  const value = callback(10);
  // ...
}
```

Здесь мы определили тип `callback` функцией с параметром `n` с типом `number` и возвращаемое значение `string`.

Если определение функции встречается часто, то для него можно создать псевдоним:

```typescript
type myFunction = (n: number) => string;

function process(callback: myFunction) {
  const value = callback(10);
  // ...
}
```

Такая запись упрощает чтение кода и позволяет избежать дублирования.
