La tipificación de clases en TypeScript aporta una nueva sintaxis para definir clases, que no existe en JavaScript. Esta sintaxis solo existe a nivel de comprobación de tipos. En el código resultante se elimina o se reemplaza. En esta lección aprenderemos cómo implementar estas clases.

## Definición de campos dentro de una clase

Comencemos con un ejemplo. Observa esta clase:

```typescript
class Point {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 20);
console.log(p); // { x: 10, y: 20 }
```

Aquí vemos una nueva sintaxis que describe los campos de la clase: `x` e `y`. Es necesario describirlos porque las clases son funciones constructoras, y en TypeScript las funciones son objetos.

Antes de seguir adelante, aclaremos el término «campo de clase».

## Campo de clase

Normalmente en JavaScript todo se llama propiedades. Y la palabra «campo» la usan como sinónimo quienes vienen de otros lenguajes. Pero no son lo mismo.

Dentro de una clase definimos **campos**, que son los datos de la propia clase. Y las **propiedades** son aquello con lo que interactuamos con el objeto.

A menudo las propiedades se corresponden directamente con los campos, pero no siempre es así. Por ejemplo, una propiedad puede ser un getter que obtiene información de un campo, y entonces solo está disponible para lectura. O una propiedad puede ser un setter que establece un nuevo valor del campo:

```typescript
class Point {
  x: number;

  y: number;

  // No se especifica el tipo de retorno, porque es un constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get inspect(): string {
    return `(${this.x}, ${this.y})`;
  }
}

const p = new Point(2, 5);
// La propiedad existe, pero no hay un campo así
console.log(p.inspect); // (2, 5)
```

En el ejemplo definimos el getter `inspect`, que devuelve una cadena con las coordenadas del punto. Esta propiedad solo está disponible para lectura: no tiene setter.

Los campos se pueden inicializar directamente al definir la clase. Esto es útil cuando no se necesita un constructor o cuando los datos no dependen de su llamada y se establecen estáticamente dentro:

```typescript
class Point {
  x = 0;

  y = 0;
}

const p = new Point();
console.log(p); // { x: 0, y: 0 }
```

Como en el caso de las variables normales, el tipo de los campos se infiere automáticamente durante su inicialización, por lo que no es necesario indicar un tipo explícito.
