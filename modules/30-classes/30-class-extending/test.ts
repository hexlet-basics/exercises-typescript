import { expect, test } from 'vitest'
import {
  ForbiddenError, HttpError, NotFoundError, UnauthorizedError,
} from './index';

test('HttpError', () => {
  const error = new HttpError(500, 'Internal Server Error');
  expect(error.status).toBe(500);
  expect(error.message).toBe('Internal Server Error');

  const forbiddenError = new ForbiddenError('Access denied');
  expect(forbiddenError.status).toBe(403);
  expect(forbiddenError.message).toBe('Access denied');

  const notFoundError = new NotFoundError('Not found');
  expect(notFoundError.status).toBe(404);
  expect(notFoundError.message).toBe('Not found');

  const unauthorizedError = new UnauthorizedError('Unauthorized');
  expect(unauthorizedError.status).toBe(401);
  expect(unauthorizedError.message).toBe('Unauthorized');
});
