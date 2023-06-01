/* eslint-disable max-classes-per-file */
import Clock from './index';

test('GameObject', () => {
  class Clock12 extends Clock {
    render(): string {
      const timeType = this.hours * 1000 + this.minutes + this.seconds < 12000 ? 'AM' : 'PM';
      const currentHour = this.hours % 12;
      return `${currentHour.toString().padStart(2, '0')} : ${this.minutes.toString().padStart(2, '0')} ${timeType}`;
    }
  }

  class Clock24 extends Clock {
    render(): string {
      return `${this.hours.toString().padStart(2, '0')} : ${this.minutes.toString().padStart(2, '0')}`;
    }
  }

  const clock12 = new Clock12(23, 59, 58);
  expect(clock12.render()).toBe('11 : 59 PM');

  clock12.tick();
  clock12.tick();

  const clock24 = new Clock24(23, 59, 58);
  expect(clock24.render()).toBe('23 : 59');

  clock24.tick();
  clock24.tick();

  expect(clock12.render()).toBe('00 : 00 AM');
  expect(clock24.render()).toBe('00 : 00');
});
