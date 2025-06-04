interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}

// BEGIN
interface ISuperman extends
  IBird, IPlane {
  guessWho: (guess: string) => string;
}

const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};
// END

export { superMan, ISuperman, IBird, IPlane };
