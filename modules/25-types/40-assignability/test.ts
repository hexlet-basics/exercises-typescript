import { expect, expectTypeOf, test } from 'vitest';

import form from './index';

test('form', () => {
  const nameValidator = form.name.validator;
  const ageValidator = form.age.validator;

  expect(nameValidator(form.name.value)).toBe(true);
  expect(ageValidator(form.age.value)).toBe(false);

  expectTypeOf(nameValidator).parameters.toMatchTypeOf<[string]>();
  expectTypeOf(ageValidator).parameters.toMatchTypeOf<[number]>();
});
