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
  guessWho: (guess: string) => void;
}
// END

const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  // BEGIN
  guessWho: (guess) => {
    console.log(`It's a ${guess}?`);
    return guess.toLowerCase() !== 'superman' ? console.log('No!') : console.log("It's a superman!");
  },
  // END
};

superMan.guessWho('bird');
superMan.guessWho('plane');
superMan.guessWho('superman');
