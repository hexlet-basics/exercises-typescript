import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import buildModal, { ModalStatus } from './index';

test('function', () => {
  expect(buildModal('hexlet', ModalStatus.Opened))
    .toEqual({ text: 'hexlet', status: ModalStatus.Opened });

  expect(buildModal('code-basics', ModalStatus.Closed))
    .toEqual({ text: 'code-basics', status: ModalStatus.Closed });

  ta.assert<ta.Equal<ReturnType<typeof buildModal>, { text: string, status: ModalStatus }>>();
});
