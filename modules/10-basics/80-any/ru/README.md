В этом уроке мы разберем специальный тип `any`, который добавлен в TypeScript.

## Польза типа `any`

Тип `any` используется в двух случаях: когда проверка типов не нужна или когда TypeScript не может вывести тип данных автоматически:

```typescript
// Типа содержимого еще нет, поэтому TypeScript не может его вывести
// В таком случае тип будет any[]

const items = [];
// Можно добавлять все, что угодно
items.push(1);
items.push("code-basics");
```

Тип `any` превращает TypeScript в JavaScript, потому что данные с таким типом перестают проверяться:

```typescript
// Ошибка возникает уже во время запуска кода
// На этапе компиляции в JS ошибок не будет
let value: any = 5;
value.toString(); // ok
value(); // ok
value.trim(); // ok
value = "wow"; // ok
```

`any` полезен во многих случаях. Например, когда нужно перевести проект из JavaScript в TypeScript. В этом случае сначала все типы объявляются как `any`, а затем переписываются на нужные.

Также `any` используют для работы с библиотеками JavaScript из TypeScript кода, у которых нет описанных типов. В остальных случаях `any` нужно избегать, потому что теряется весь смысл использования языка TypeScript.

Рассмотрим первый случай подробнее.

## Из JavaScript в TypeScript

Возьмем для примера код, который считает количество повторений слов в предложении:

```javascript
const sentence = "table cat table dog dog apple table";

const words = sentence.split(" ");
const initial = {};
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
// { table: 3, cat: 1, dog: 2, apple: 1 }
```

Компилятор TypeScript такой код не пропустит. Он укажет, что объект в константе `initial` не содержит ключей со строковым типом:

```text
No index signature with a parameter of type 'string' was found on type '{}'.
acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
```

Так происходит, потому что структура объекта задает его тип во время определения. Также в процессе работы структура не может меняться. Но в коде выше изначально объект вообще пустой, а по мере работы он заполняется ключами динамически.

Правильно задавать тип в ситуации с динамическими ключами мы научимся позже. А пока сделаем код рабочим с помощью `any`. Для этого нужно определить объект с явным указанием типа:

```typescript
const sentence = "table cat table dog dog apple table";

const words = sentence.split(" ");
const initial: any = {}; // Указали тип как any
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
```

TypeScript больше не показывает ошибку компиляции, что с одной стороны хорошо. Но с другой — сама проверка допустимости действий над этим объектом отключена. Если в дальнейшем обратиться к несуществующему свойству в этом объекте, TypeScript не укажет на ошибку.

В этом уроке мы научились работать с типом `any`. Также мы узнали, для чего и в каких случаях он используется.
