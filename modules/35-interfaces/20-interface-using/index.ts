interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}
interface ISuperman extends
// BEGIN
  IBird, IPlane {
  guessWho: (guess: string) => string;
}
// END

const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  // BEGIN
  guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
  // END
};

export default superMan;
