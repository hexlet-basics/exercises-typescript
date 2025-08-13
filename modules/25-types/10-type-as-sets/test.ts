import { expect, test } from 'vitest';
import type CustomType from './index';

test('CustomType', () => {
  const numberValue: CustomType = 1;
  expect(numberValue).toBe(1);

  const nullValue: CustomType = null;
  expect(nullValue).toBe(null);

  const undefinedValue: CustomType = undefined;
  expect(undefinedValue).toBe(undefined);
});
