// import type { Equal } from 'type-assertions';
// import { assert } from 'type-assertions';

import startGame from './index';

test('startTurtleGame', () => {
  const { makeTurn, state } = startGame();

  // assert<Equal<ReturnType<typeof makeTurn>, void>>;

  expect(state).toEqual(['turtle', null, null, null, null]);

  expect(() => makeTurn('left')).toThrow();
  expect(state).toEqual(['turtle', null, null, null, null]);

  makeTurn('right');
  expect(state).toEqual([null, 'turtle', null, null, null]);

  makeTurn('right');
  makeTurn('right');
  expect(state).toEqual([null, null, null, 'turtle', null]);

  makeTurn('right');
  expect(state).toEqual([null, null, null, null, 'turtle']);

  expect(() => makeTurn('right')).toThrow();

  makeTurn('left');
  expect(state).toEqual([null, null, null, 'turtle', null]);
});
