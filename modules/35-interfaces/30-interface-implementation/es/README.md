En TypeScript, las clases pueden interactuar estrechamente con las interfaces. En esta lección veremos cómo extender interfaces con clases y cómo crear clases basadas en interfaces.

## Extensión de una interfaz con clases

En la lección anterior vimos cómo las interfaces pueden extender otras interfaces y combinarlas. De la misma manera, las interfaces pueden ser extendidas por clases:

```typescript
interface IBeep {
  sayBeep: () => string;
}

interface IBoop {
  sayBoop: () => string;
}

class Robo implements IBeep, IBoop {
  sayBeep = () => "beep";

  sayBoop = () => "boop";
}

const R2D2 = new Robo();
R2D2.sayBeep(); // 'beep'
```

Aquí extendimos dos interfaces con una clase que heredó todos los métodos de estas interfaces. Los métodos heredados tuvimos que escribirlos a mano.

## Creación de clases basadas en interfaces

Podemos crear clases basadas en interfaces igual que creamos interfaces basadas en interfaces. Pero hay diferencias.

Si creamos una interfaz o un tipo y luego transpilamos TypeScript a JavaScript, en el código no quedará rastro de esa interfaz. En cambio, cuando creamos una clase, su plantilla siempre pasa a JavaScript durante la transpilación.

Por tanto, la opción con interfaces es más ligera, pero la elección debe depender del problema que estemos resolviendo.

Crear una clase basada en una interfaz no implementa esa interfaz en la clase de forma automática. TypeScript solo comprueba si las propiedades y los métodos de nuestra clase cumplen con las propiedades declaradas en la interfaz. La clase en sí la escribimos a mano.

Veamos un ejemplo:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum(num1, num2) {
    return num1 + num2;
  }
  // Para los parámetros se mostrará el mensaje: Parameter 'num1'/'num2' implicitly has an 'any' type,
  // porque TypeScript solo comprueba que la clase coincida con la interfaz, pero no hereda de ella por completo

  multiply(num1: number, num2: number) {
    return num1 * num2;
  }
  // Hemos agregado un nuevo método, pero TypeScript no protesta
}

let calculator = new Summator();
// Nuestro código funcionará como si los argumentos fueran de tipo any,
// porque los tipos de los parámetros, al igual que todo lo demás, no los heredó la clase al implementar la interfaz
calculator.sum(2, 3); // 5
```

Un error en la implementación de la interfaz por la clase solo es posible cuando no implementamos una de las propiedades especificadas en la interfaz. O cuando la implementamos de forma distinta a como está indicado en la interfaz:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum(num1: string, num2: string) {
    return num1 + num2;
  }
  // Hemos cambiado los tipos de los argumentos a string, es decir, hemos implementado mal la interfaz
  // En este caso, TypeScript detectará nuestro error y no compilará:
  // Type '(num1: string, num2: string) => string' is not assignable to type '(num1: number, num2: number) => number'.
}
```

Por la misma razón, si escribimos una clase que implementa una interfaz con propiedades opcionales, tenemos que escribirlo todo nosotros mismos. De lo contrario, estas propiedades no llegarán a nuestra clase:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number) => number;
  multiply?: (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

const calculator = new Summator();
calculator.sum(2, 3); // 5
calculator.multiply(2, 3); // Property 'multiply' does not exist on type 'Summator'.
```

En el ejemplo anterior solo especificamos el método `sum` al implementar la interfaz con la clase `Summator`. Como resultado, el código se compiló con éxito, ya que el método `multiply` estaba indicado como opcional. Sin embargo, en la instancia de nuestra clase no podemos acceder a este método.

## Conclusiones

Como en TypeScript existen varias herramientas diferentes para las mismas cosas, podemos implementar clases extendiendo clases abstractas en lugar de interfaces. Pero la elección dependerá de la tarea. Las clases abstractas nos proporcionan modificadores de acceso y constructores, mientras que las interfaces son más ligeras y sencillas.
