interface IVehicle {
  honk(): void;
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  getKilometresTravelled(): number;
}

// BEGIN
class Car implements IVehicle {
  honkSound = 'beep beep';

  honk() {
    console.log(this.honkSound);
  }

  maxSpeed = '200 km/h';

  seats = 4;

  colour = 'black';

  canHavePassengers = true;

  kilometresTravelled = 200;

  getKilometresTravelled() {
    return this.kilometresTravelled;
  }
}
// END

const porche = new Car();
porche.honk();
