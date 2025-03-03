import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import form from './index';

test('form', () => {
  const nameValidator = form.name.validator;
  const ageValidator = form.age.validator;

  expect(nameValidator(form.name.value)).toBe(true);
  expect(ageValidator(form.age.value)).toBe(false);

  ta.assert<ta.Equal<Parameters<typeof nameValidator>, [string]>>();
  ta.assert<ta.Equal<Parameters<typeof ageValidator>, [number]>>();
});
