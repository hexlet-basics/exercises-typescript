En esta lección veremos la herencia. Es un mecanismo que permite crear subclases a partir de clases ya existentes. Las subclases heredan las propiedades y los métodos de la clase padre y pueden ampliarlos.

En TypeScript, la herencia se implementa con la palabra clave `extends`:

```typescript
// TypeScript ya incluye la clase File, así que definiremos nuestra propia clase de archivo llamada CustomFile
class CustomFile {
  constructor(
    public name: string,
    public size: number,
  ) {}
}

class ImageCustomFile extends CustomFile {
  constructor(
    name: string,
    size: number,
    public width: number,
    public height: number,
  ) {
    super(name, size);
  }
}
```

Solo se puede heredar de una clase. Pero la cadena de herencia puede ser infinita. Por ejemplo, la clase `ImageCustomFile` hereda de la clase `CustomFile`, que a su vez puede heredar de otra clase, y así sucesivamente.

Toda la cadena de herencia forma una jerarquía de clases. Esto sucede porque las clases también pueden usarse como tipos: la jerarquía de clases coincide por completo con la jerarquía de tipos. Una subclase es un subtipo de la clase base y puede usarse en su lugar, a la vez que establece restricciones más estrictas:

```typescript
const file = new CustomFile('open-world.jpeg', 1000);
const image = new ImageCustomFile('open-world.jpeg', 1000, 100, 100);

const showImage = (image: ImageCustomFile) => {
...
};
showImage(file); // Error
```

Al heredar, se pueden sobrescribir los métodos de la clase padre. En ese caso, hay que mantener la firma del método o cumplir algunas reglas:

- Los tipos de los parámetros del método sobrescrito son bivariantes: no están limitados
- El tipo de retorno del método sobrescrito es covariante: debe ser el mismo o uno más estrecho

El método padre recibe `string` y devuelve `string`. El método sobrescrito debe tener un tipo de parámetro más amplio o más estrecho, por ejemplo, `string | null` o `'some string'`. En cambio, debe devolver el mismo tipo o uno más estrecho, por ejemplo, `'some string'`:

```typescript
class CustomFileFactory {
  createCustomFile(name: string, size: number): CustomFile {
    return new CustomFile(name, size);
  }
}

class ImageCustomFileFactory1 extends CustomFileFactory {
  createCustomFile(name: string, size: number): ImageCustomFile {
    // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}

class ImageCustomFileFactory2 extends CustomFileFactory {
  createCustomFile(name: "file", size: number): CustomFile {
    // OK
    return new ImageCustomFile(name, size, 100, 100);
  }
}

class ImageCustomFileFactory3 extends CustomFileFactory {
  createCustomFile(name: number, size: number): CustomFile {
    // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}

class ImageCustomFileFactory4 extends CustomFileFactory {
  createCustomFile(name: string, size: number): {} {
    // Error!
    return new ImageCustomFile(name, size, 100, 100);
  }
}
```
