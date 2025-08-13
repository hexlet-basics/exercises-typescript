import { expect, test } from 'vitest';
import handleData, { type DataState, LoadingStatus } from './index';

test('handleData', () => {
  const loading: DataState = { status: LoadingStatus.Loading };
  expect(handleData(loading)).toBe('loading...');

  const success: DataState = { status: LoadingStatus.Success, data: 42 };
  expect(handleData(success)).toBe('42');

  const error: DataState = {
    status: LoadingStatus.Error,
    error: new Error('error'),
  };
  expect(handleData(error)).toBe('error');

  const unknown = { status: 'unknown' };
  // @ts-expect-error type '{ status: 'unknown' }' is not assignable to type 'DataState'.
  expect(handleData(unknown)).toBe('unknown');
});
