interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;
  calcFuelNeeded(distance:number): number;
}

// BEGIN
class Car implements IVehicle {
  seats: number;

  colour: string;

  canHavePassengers: boolean;

  fuelPer100Kilometers: number;

  constructor(
    seats: number,
    colour: string,
    canHavePassengers: boolean,
    fuelPer100Kilometers: number,
  ) {
    this.seats = seats;
    this.colour = colour;
    this.canHavePassengers = canHavePassengers;
    this.fuelPer100Kilometers = fuelPer100Kilometers;
  }

  calcFuelNeeded(distance: number) {
    return (this.fuelPer100Kilometers / 100) * distance;
  }
}

export default Car;
// END
