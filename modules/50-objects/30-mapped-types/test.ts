import { expect, expectTypeOf, test } from 'vitest';

import sanitize from './index';

test('sanitize', () => {
  const obj = {
    name: 'John',
    age: 30,
    password: '123456',
  };

  expect(sanitize(obj, ['name', 'age'])).toEqual({
    password: '123456',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = sanitize(obj, ['password']);

  expectTypeOf(user).toMatchTypeOf<{ name: string; age: number }>();

  const params = {
    page: 1,
    limit: 10,
    filter: {
      name: 'John',
    },
  };

  const query = sanitize(params, ['filter']);
  expect(query).toEqual({
    page: 1,
    limit: 10,
  });

  expectTypeOf(query).toMatchTypeOf<{ page: number; limit: number }>();
});
