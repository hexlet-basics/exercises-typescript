import { expect, test, expectTypeOf } from 'vitest';

import buildModal, { ModalStatus } from './index';

test('function', () => {
  expect(buildModal('hexlet', ModalStatus.Opened))
    .toEqual({ text: 'hexlet', status: ModalStatus.Opened });

  expect(buildModal('code-basics', ModalStatus.Closed))
    .toEqual({ text: 'code-basics', status: ModalStatus.Closed });

  expectTypeOf(buildModal).returns.toMatchTypeOf<{ text: string, status: ModalStatus }>();
});
