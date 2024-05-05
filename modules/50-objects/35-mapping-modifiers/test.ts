import * as ta from 'type-assertions';

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

  expect(deepFreeze(obj)).toEqual({
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

  const user = deepFreeze(obj);

  ta.assert<ta.Equal<typeof user, Readonly<{
    name: string,
    age: number,
    location: Readonly<{
      city: string,
      coordinates: Readonly<{
        lat: number,
        lon: number,
      }>,
    }>,
  }>>>();
});
