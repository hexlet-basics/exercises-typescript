import getUserFriends, { UserResponse } from './index';

test('getUserFriends', () => {
  const userJson = JSON.stringify(<UserResponse>{
    users: [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Mary', age: 21 },
      { id: 3, name: 'Peter', age: 22 },
      { id: 4, name: 'Ann', age: 23 },
    ],
    friends: [
      [1, 2],
      [1, 3],
      [3, 2],
    ],
  });

  const friends = getUserFriends(userJson, 10);
  expect(friends).toEqual([]);

  const friends1 = getUserFriends(userJson, 1);
  expect(friends1).toEqual([
    { id: 2, name: 'Mary', age: 21 },
    { id: 3, name: 'Peter', age: 22 },
  ]);

  const friends2 = getUserFriends(userJson, 2);
  expect(friends2).toEqual([
    { id: 1, name: 'John', age: 20 },
    { id: 3, name: 'Peter', age: 22 },
  ]);
});
