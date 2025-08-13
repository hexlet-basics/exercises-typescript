import { expect, test } from 'vitest';
import fail from './index';

test('function', () => {
  expect(fail).toThrow();
});
