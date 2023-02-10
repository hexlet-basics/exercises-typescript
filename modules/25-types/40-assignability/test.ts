import * as ta from 'type-assertions';

import form from './index';

test('form', () => {
  expect(form).toBeDefined();

  const nameValidator = form.name.validator;
  const ageValidator = form.age.validator;

  expect(nameValidator(form.name.value)).toBe(true);

  expect(ageValidator(form.age.value)).toBe(false);

  ta.assert<ta.Equal<Parameters<typeof nameValidator>, [string]>>();
  ta.assert<ta.Equal<Parameters<typeof ageValidator>, [number]>>();
});
