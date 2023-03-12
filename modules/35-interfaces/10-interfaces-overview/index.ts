interface IVehicle {
  honk(): void;
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  countKilometresTravelled(): number;
}

// BEGIN

// END

const porche = new Car();
porche.honk();
