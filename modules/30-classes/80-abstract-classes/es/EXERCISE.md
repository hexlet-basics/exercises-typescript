Crea la clase abstracta `Clock`, que contendrá la lógica común para las clases de relojes con distintos formatos de visualización de la hora: de 12 horas y de 24 horas.

La lógica común debe incluir el almacenamiento de los datos: las horas `hours`, los minutos `minutes` y los segundos `seconds`. También forma parte de la lógica común el método `tick()`, que en cada llamada aumenta los segundos en uno. Si los segundos llegan a 60, los minutos aumentan en 1 y los segundos vuelven a 0. Lo mismo ocurre con los minutos y las horas: si los minutos llegan a 60, aumenta el valor de la hora actual y los minutos vuelven a 0. Si la hora llega a 24, su valor vuelve a 0.

El valor inicial de la hora se establece al crear el objeto. El constructor recibe como primer parámetro la hora actual, como segundo los minutos y como tercero los segundos.

La clase abstracta `Clock` debe exigir a sus subclases que implementen el método `render()`.

```typescript
// Formato de 24 horas
class Clock24 extends Clock {
  render(): string {
    const currentHour = this.hours % 24;
    const hours = currentHour.toString().padStart(2, "0");
    const minutes = this.minutes.toString().padStart(2, "0");

    return `${hours} : ${minutes}`;
  }
}

const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render()); // => '23 : 59'
clock24.tick();
console.log(clock24.render()); // => '00 : 00'

// Formato de 12 horas
class Clock12 extends Clock {
  render(): string {
    const timeType = this.hours >= 12 ? "PM" : "AM";

    let currentHour = this.hours > 12 ? this.hours - 12 : this.hours;
    if (timeType === "AM" && this.hours === 0) {
      currentHour = 12;
    }

    const hours = currentHour.toString().padStart(2, "0");
    const minutes = this.minutes.toString().padStart(2, "0");
    return `${hours} : ${minutes} ${timeType}`;
  }
}

const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render()); // => '11 : 59 PM'
clock12.tick();
console.log(clock12.render()); // => '12 : 00 AM'
```
