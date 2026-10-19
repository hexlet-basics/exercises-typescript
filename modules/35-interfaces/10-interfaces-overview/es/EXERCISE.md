
Tienes una interfaz IVehicle. La tarea consiste en implementar, basándote en esta interfaz, una clase Car que tendrá un método calcFuelNeeded, el cual recibe una distancia en kilómetros y devuelve el consumo de combustible para la distancia indicada. La clase Car también debe tener una función constructora que reciba e implemente las propiedades indicadas en la interfaz.

```typescript
const porche = new Car(4, "red", true, 20);
console.log(porche.calcFuelNeeded(200)); // 40
```
