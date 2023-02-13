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
const getUserFriends = (userJson: string, userId: number): User[] => {
  const { users, friends } = JSON.parse(userJson) as UserResponse;

  const friendIds = friends.filter(([id1, id2]) => id1 === userId || id2 === userId)
    ?.map(([id1, id2]) => (id1 === userId ? id2 : id1)) ?? [];

  return friendIds.flatMap((id) => users.find((user) => user.id === id) ?? []);
};
// END

export default getUserFriends;
