interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;
  calcFuelNeeded(distance:number): number;
}

// BEGIN
class Car implements IVehicle {
  constructor(
    public seats: number,
    public colour: string,
    public canHavePassengers: boolean,
    public fuelPer100Kilometers: number,
  ) {}

  calcFuelNeeded(distance: number) {
    return (this.fuelPer100Kilometers / 100) * distance;
  }
}
// END

export default Car;
