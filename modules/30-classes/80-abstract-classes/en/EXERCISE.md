
Create an abstract class `Clock`, which will contain common logic for clock classes with different time output formats: 12-hour and 24-hour.

The common logic should store data: hours `hours`, minutes `minutes` and seconds `seconds`. Also included in the common logic is the `tick()` method, which increments the second by one each time it is called. If the second is incremented to a value of 60, the minute is incremented by 1 and the second is reset to 0. The same is true for minutes and hours: if the minutes value is incremented to 60, the current hour is incremented and the minutes are reset to 0. If the hour value is incremented to 24, the hour is reset to 0.

The initial time value is set when the object is created. The first parameter passed to the constructor is the current hour, the second is the minutes, and the third is the seconds.

The abstract class `Clock` must require its successors to implement the `render()` method.

```typescript

// 24-hour format
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

// 12-hour format
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
