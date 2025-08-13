// BEGIN
type User = {
  name: string;
  age: number;
};

function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age > user2.age) {
    return user1;
  }
  if (user2.age > user1.age) {
    return user2;
  }

  return null;
}
// END

export type { User };
export default getOlderUser;
