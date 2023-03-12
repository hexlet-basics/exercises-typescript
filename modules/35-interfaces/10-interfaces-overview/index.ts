interface IVehicle {
  honk(): void;
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  countKilometresTravelled(): number;
}

// BEGIN
class Car implements IVehicle {
  honk() {
    console.log('beep beep!');
  }

  maxSpeed = '200 km/h';

  seats = 4;

  colour = 'black';

  canHavePassengers = true;

  countKilometresTravelled() {
    return 10;
  }
}
// END

const porche = new Car();
porche.honk();
