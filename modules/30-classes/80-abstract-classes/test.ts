/* eslint-disable max-classes-per-file */
import Clock from './index';

test('GameObject', () => {
  class Clock12 extends Clock {
    render(): string {
      const timeType = this.hours > 12 ? 'PM' : 'AM';

      let currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
      if (timeType === 'AM' && this.hours === 0) {
        currentHour = 12;
      }

      const hours = currentHour.toString().padStart(2, '0');
      const minutes = this.minutes.toString().padStart(2, '0');
      return `${hours} : ${minutes} ${timeType}`;
    }
  }

  class Clock24 extends Clock {
    render(): string {
      return `${this.hours.toString().padStart(2, '0')} : ${this.minutes.toString().padStart(2, '0')}`;
    }
  }

  const clock121 = new Clock12(12, 59, 0);
  expect(clock121.render()).toBe('12 : 59 AM');

  const clock12 = new Clock12(23, 59, 58);
  expect(clock12.render()).toBe('11 : 59 PM');

  clock12.tick();
  clock12.tick();

  expect(clock12.render()).toBe('12 : 00 AM');

  const clock24 = new Clock24(23, 59, 58);
  expect(clock24.render()).toBe('23 : 59');

  clock24.tick();
  clock24.tick();

  expect(clock24.render()).toBe('00 : 00');
});
