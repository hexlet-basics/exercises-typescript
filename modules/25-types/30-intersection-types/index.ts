export type Person = {
  name: string,
  surname: string,
  age: number,
};

export type Worker = Person & {
  post: string,
  salary: number,
};
