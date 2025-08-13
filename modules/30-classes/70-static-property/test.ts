import { expect, test } from 'vitest';
import UserResponse from './index';

test('UserResponse', () => {
  const users = ['user1', 'user2'];
  const result = UserResponse.fromArray(users);

  expect(result).toEqual([
    new UserResponse('user1'),
    new UserResponse('user2'),
  ]);
  expect(result[0]).toBeInstanceOf(UserResponse);

  const users2 = ['user3', 'user4', 'user5'];
  const result2 = UserResponse.fromArray(users2);

  expect(result2[0].user).toBe('user3');
  expect(result2[2]).toBeInstanceOf(UserResponse);
});
