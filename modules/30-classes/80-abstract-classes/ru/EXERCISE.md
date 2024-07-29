Создайте абстрактный класс `Clock`, который будет содержать общую логику для классов часов с разными форматами вывода времени: 12-часовой и 24-часовой.

В общей логике должно быть хранение данных: часы `hours`, минуты `minutes` и секунды `seconds`. Так же в общую логику входит метод `tick()`, который при каждом вызове увеличивает секунду на единицу. Если секунда увеличивается до значения 60, то увеличивается минута на 1, а секунда сбрасывается до 0. То же самое с минутами и часами: если значение минут увеличивается до 60, то увеличивается значение текущего часа, а минуты сбрасываются до 0. Если значение часа увеличивается до 24, то происходит сброс этого значения до 0.

Начальное значение времени задается при создании объекта. Первым параметром в конструктор передается текущий час, вторым минуты, третьим секунды.

Абстрактный класс `Clock` должен требовать от своих наследников реализацию метода `render()`.

```typescript

// 24-часовой формат
class Clock24 extends Clock {
  render(): string {
    const currentHour = this.hours % 24;
    const hours = currentHour.toString().padStart(2, '0');
    const minutes = this.minutes.toString().padStart(2, '0');

    return `${hours} : ${minutes}`;
  }
}

const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render()); // => '23 : 59'
clock24.tick();
console.log(clock24.render()); // => '00 : 00'

// 12-часовой формат
class Clock12 extends Clock {
  render(): string {
    const timeType = this.hours >= 12 ? 'PM' : 'AM';

    let currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
    if (timeType === 'AM' && this.hours === 0) {
      currentHour = 12;
    }

    const hours = currentHour.toString().padStart(2, '0');
    const minutes = this.minutes.toString().padStart(2, '0');
    return `${hours} : ${minutes} ${timeType}`;
  }
}

const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render()); // => '11 : 59 PM'
clock12.tick();
console.log(clock12.render()); // => '12 : 00 AM'
```
