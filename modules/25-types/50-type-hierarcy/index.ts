type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

export type UserResponse = {
  users: User[],
  friends: Friends[]
};

// BEGIN
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (userResponseJSON: string, userId: number): User[] => {
  const userResponse = JSON.parse(userResponseJSON) as UserResponse;

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser;
      const searchId = (ownerId === userId) ? friendId : ownerId;
      const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId);

      return friend === undefined ? defaultUser : friend;
    })
    .filter((user: User) => user.id > 0);
};
// END

export default getUserFriends;
