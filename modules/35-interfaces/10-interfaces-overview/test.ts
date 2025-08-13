import { expect, test } from 'vitest';
import Car from './index';

test('Car', () => {
  const porche = new Car(4, 'red', true, 20);
  expect(porche.calcFuelNeeded(100)).toBe(20);

  const schoolBus = new Car(30, 'yellow', true, 24);
  expect(schoolBus.calcFuelNeeded(25)).toBe(6);

  const lada = new Car(4, 'white', true, 13);
  expect(lada.calcFuelNeeded(200)).toBe(26);
});
