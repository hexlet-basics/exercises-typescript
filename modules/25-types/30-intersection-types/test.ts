/* eslint-disable @typescript-eslint/no-unused-vars */
import { Person, Worker } from '.';

test('IntersectionTypes', () => {
  const person: Person = {
    name: 'Jim',
    surname: 'Greeg',
    age: 25,
  };

  const worker: Worker = {
    name: 'Jim',
    surname: 'Greeg',
    age: 25,
    post: 'Developer',
    salary: 100000,
  };
});
