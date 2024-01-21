
В JavaScript возможно работать с объектами и классами одинаковым образом. При этом не нужно опираться ни на наследование, ни на интерфейсы. Нужны только ожидаемые поля и методы. Такой подход называют утиной типизацией — duck typing. То что ходит как утка и крякает как утка – утка:

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

В языках как Java нам бы потребовалось определить интерфейс, после отдельно имплементировать его для классов `User` и `Admin`. А в параметрах метода форматирования тип аргумента был бы этим интерфейсом.

Другой вариант — написать метод с перегрузкой для этих двух случаев. Языки с таким поведением используют номинативную типизацию — nominative typing.

Чтобы организовать подход утиной типизации в Java, нужно написать много дополнительного кода.

Чтобы упростить переход с JavaScript на TypeScript и использовать проверки до выполнения кода, был выбран подход структурной типизации. С ней мы и познакомимся в этой уроке.

С помощью структурной типизации мы можем легко переписать наш пример на TypeScript:

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

Мы создали тип `User`, который описывает ожидаемую структуру объекта. При этом в функции `formatUser` мы указали, что ожидаемый аргумент должен соответствовать типу `User`. Таким образом функция `formatUser` принимает только объекты, которые содержат все поля из объектного типа `User`.

Важно помнить, что структурная типизация не защищает нас от наличия дополнительных полей в объекте:

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

При том что мы не указали поле `email` в типе `User`, TypeScript все равно не выдаст ошибку, так как в объекте `moderator` есть все поля, которые описаны в типе `User`.

В структурной типизации об объектном типе можно думать, как об описании структуры, которое накладывает ограничения на присваиваемые значения. Или как о множестве объектов, которые могут быть присвоены переменной с таким типом.

![object](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/60-structural-typing/assets/structual_object.png)

Чем меньше полей в объектном типе, тем менее специфичное ограничений накладывается на присваиваемое значение. На множествах это означает, что объектный тип с дополнительными полями будет подмножеством объектного типа без этих полей. Если говорить о сужении и расширении типа в объектных типах, то дополнительные поля сужают тип.

Аналогично операциям со множествами для объектных типов можно сформировать понимание пересечения и объединения в структурной типизации.

При объединении `|` мы расширяем тип — увеличиваем число допустимых значений для типа. А при пересечении `&` — сужаем. Так мы уменьшаем число допустимых значений:

```typescript
type IntersectionUser = {
  username: string;
  password: string;
} & {
    type: string;
}

const admin: IntersectionUser = {  // требуется совпадение c объектным типом и слева и справа от оператора &
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

const user: UnionUser = { username: 'test', type: 'user' } // достаточно совпадения с одним из объектных типов
```

Получившийся тип `IntersectionUser` описывает объекты, которые содержат поля `username`, `password` и `type`. А тип `UnionUser` — объекты, которые содержат поля `username` и `password` **ИЛИ** `type`.

![object intersection](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/60-structural-typing/assets/structual_object.png)

В алгебре множеств пересечение двух множеств также называют логическим умножением. А для типов используют термин произведение типов. Объединение множеств же называют логическим сложением, а для типов — сумма типов.

Попробуйте ответить, что будет, если использовать в пересечении два объектных типа с одинаковым именем поля, но с отличающимися типами. Это распространенная ошибка по невнимательности или из-за недостаточного понимания типов как множеств.

<details>
  <summary>Ответ</summary>
Когда при пересечении объектных типов встречаются поля с одинаковыми именами, то в результате типы этих полей будут также пересечены, и итоговый тип будет never.
</details>

При использовании объединенных типов в функциях нужно учитывать следующий момент. Рассмотрим пример:

```typescript
const user: UnionUser = { username: 'test', type: 'user' };

const func = (user: UnionUser) => {
  console.log(user.type);
};
```

Компилятор выдаст ошибку, так как тип в переменной `user` может относиться либо к левому типу, либо к правому. В итоге нет гарантии, что в объекте `user` будет любое из свойст.
