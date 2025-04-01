import { expect, test, expectTypeOf } from 'vitest';

import deepFreeze from './index';

test('deepFreeze', () => {
  const obj = {
    name: 'John',
    age: 30,
    location: {
      city: 'York',
      coordinates: {
        lat: 53.958,
        lon: -1.093,
      },
    },
  };

  const user = deepFreeze(obj);

  expect(user).toEqual({
    name: 'John',
    age: 30,
    location: {
      city: 'York',
      coordinates: {
        lat: 53.958,
        lon: -1.093,
      },
    },
  });

  expect(() => {
    // @ts-expect-error Cannot assign read-only property.
    user.age = 20;
  }).toThrow();

  expect(() => {
    // @ts-expect-error Cannot assign nested read-only property.
    user.location.city = 'London';
  }).toThrow();

  expectTypeOf(user).toMatchTypeOf<Readonly<{
    name: string,
    age: number,
    location: Readonly<{
      city: string,
      coordinates: Readonly<{
        lat: number,
        lon: number,
      }>,
    }>,
  }>>();
});
