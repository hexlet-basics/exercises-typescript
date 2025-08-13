import { expect, expectTypeOf, test } from 'vitest';

import buildModal, { ModalStatus } from './index';

test('function', () => {
  expect(buildModal('hexlet', ModalStatus.Opened)).toEqual({
    text: 'hexlet',
    status: ModalStatus.Opened,
  });

  expect(buildModal('code-basics', ModalStatus.Closed)).toEqual({
    text: 'code-basics',
    status: ModalStatus.Closed,
  });

  expectTypeOf(buildModal).returns.toExtend<{
    text: string;
    status: ModalStatus;
  }>();
});
