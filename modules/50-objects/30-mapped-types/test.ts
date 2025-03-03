import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

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

  const user = sanitize(obj, ['password']);

  ta.assert<ta.Equal<typeof user, { name: string; age: number }>>();

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

  ta.assert<ta.Equal<typeof query, { page: number; limit: number, }>>();
});
