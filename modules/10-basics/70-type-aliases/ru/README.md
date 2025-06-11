
Представим программу, в которой есть объект пользователя. Этот объект используется повсеместно. В такой ситуации описание типа этого объекта будет повторяться в каждом определении функции:

```typescript
function doSomething(user: { firstName: string, pointsCount: number }) {}
function doSomethingElse(user: { firstName: string, pointsCount: number }) {}
function doSomethingAnother(user: { firstName: string, pointsCount: number }) {}
````

Во-первых, здесь много дублирования. Во-вторых, значительно усложняется изменение структуры, так как придется руками править все места, где встречается это определение. В этом уроке разберем, как избежать таких проблем.

## Задаем псевдоним типа

Чтобы не делать одну и ту же работу, TypeScript позволяет задавать псевдоним для составных типов. Так мы не будем повторяться:

```javascript
type User = {
  firstName: string;
  pointsCount: number;
}
```

Теперь можно провести замену во всех функциях:

```typescript
function doSomething(user: User) {
  // ...
}
```

Псевдоним — это не создание нового типа данных. Это способ сокращенно записать определение типа. Поэтому следующие примеры будут работать без проблем:

```typescript
const user = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Оба вызова работают
doSomething(user);
doSomething({ firstName: 'Bob', pointsCount: 1800 });
```

При этом разработчики на TypeScript говорят «создал тип», а не «создал псевдоним типа». Поэтому в этом курсе мы будем придерживаться общепринятого формата.

Типы можно задавать для любых типов данных, например, для простых:

```typescript
type SomeType = string;
```

А также для составных:

```typescript
// union тип из трех возможных значений
type SomeType = string | number | null;

// Функция
type Countable = (coll: number[]) => number
```

## Объекты и функции

Описание типа функции вне объекта и внутри отличается. Когда функция записывается самостоятельно, используется формат стрелочной функции:

```typescript
type Countable = (coll: number[]) => number
```

Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  count(coll: number[]): number;
}
```

Но это не касается колбеков, которые могут быть использованы внутри:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  // Типы взяты для примера
  count(coll: (v: string) => string): number;
}
```

В этом уроке мы научились использовать псевдонимы типов. Также мы узнали, как задавать псевдоним для составных типов.
