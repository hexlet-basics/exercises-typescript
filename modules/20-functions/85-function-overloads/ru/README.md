
В этом уроке мы научимся использовать перегрузки функций.

## Использование перегрузки функций

**Перегрузка функций** — это возможность определить несколько версий одной функции, каждая из которых принимает свой набор параметров. Разберем на примере:

```typescript
function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

concat('one', 'two'); // onetwo
concat(3, 5.34); // 35
concat(1.33, 10); // 110
```

Здесь определяется одна функция `concat()`. У нее две версии, которые выполняют конкатенацию, но делают это по-разному:

* Первая версия — принимает на вход два числа. У чисел сначала отбрасывается дробная часть, потом они конкатенируются
* Вторая версия — принимает на вход две строки. Строки конкатенируются сразу

Реализация поведения для обеих версий делается в третьей функции с тем же именем. При этом описание параметров должно подходить под каждую версию функции. В примере выше типы параметров определены как `unknown`. Это дает возможность вызывать функцию как со строками, так и с числами.

То, по какой ветке идти, определяется с помощью проверки типов. В примере выше достаточно проверить тип только первого параметра, так как второй совпадает с первым. Это обеспечивает система типов и компилятор.

Для перегрузки необязательно использовать объявление функций. То же самое можно сделать с помощью стрелочной функции:

```typescript
const concat: {
  (a: number, b: number): string;
  (a: string, b: string): string;
} = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

// с использованием псевдонимов
type Overloaded = {
  (a: number, b: number): string;
  (a: string, b: string): string;
}

const concat: Overloaded = (a, b) => {...}
```

В этом случае не обязательно явно указывать типы параметров внутри функции.

Перегрузка функций не ограничивается двумя версиями. Их может быть сколько угодно. Главное, что в конце всегда описывается функция, которая является общей по параметрам для всех вариантов и внутри которой описывается вся логика для каждого варианта.

Опишем функцию `add()`, которая может принимать на вход два или три числа и возвращает их сумму:

```typescript
function add(a: number, b: number, c: number): number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Сигнатура подходит под все примеры выше
function add(a: unknown, b: unknown, c?: number): unknown {
  // тут вся логика
  if (c === undefined) {
    // ...
  }
}
```

В статических языках перегрузка функций используется достаточно часто, но в большинстве из них она устроена не как в TypeScript. В этих языках создается несколько разных функций, которые с точки зрения программиста имеют одно имя. Поэтому там не нужна общая функция. Логика каждого варианта описывается внутри. Это избавляет код от необходимости реализовывать условную логику.

```kotlin
// Пример на Kotlin
fun main() {
  fun newYearCongratulate (name:String):String {
    return "Hi ${name}! Happy New Year!"
  }
  fun newYearCongratulate (year: Number, name:String):String {
    return "Hi ${name}! Happy New Year ${year}!"
  }

  println(newYearCongratulate("John")) // Hi John! Happy New Year!
  println(newYearCongratulate(2023, "Elon")) // Hi Elon! Happy New Year 2023!
}
```

Зачем в TypeScript такая реализация и какие проблемы она решает? Это, как и многое другое в TypeScript — попытка учесть все варианты написания кода на JavaScript и покрыть их типами для написания типобезопасного кода.

В JavaScript нередко создают функции, которые принимают на вход разные типы данных в разных вариациях. Перегрузка функций позволяет описать подобные функции в TypeScript, иначе пришлось бы использовать `any` и следить за типами самостоятельно.

Технически после транспиляции в JavaScript остается одна функция — та, что содержит тело.

Перегрузка функций в TypeScript — это механизм, который стоит использовать, когда нет другого выбора. В большинстве случаев вместо перегрузки используются объединения или дженерики, о которых мы поговорим позже.

Перегрузка нужна, когда между параметрами есть зависимость, например, если оба параметра — строки, либо оба параметра — числа.
