type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  // BEGIN
  const makeTurn = (direction: 'left' | 'right'): void => {
    const turtleIndex = state.indexOf('turtle');
    const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

    if (nextIndex < 0 || nextIndex > 4) {
      throw new Error('Out of bounds');
    }

    state[turtleIndex] = null;
    state[nextIndex] = 'turtle';
  };
  // END

  return { makeTurn, state };
};

export default startGame;
