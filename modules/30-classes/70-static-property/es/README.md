A veces necesitamos definir una propiedad o un método que sea común para todas las instancias de la clase. Por ejemplo, para determinar si un objeto es una instancia de la clase. En ese caso, al declarar el método podemos indicar la palabra clave `static`, y este quedará accesible a través del nombre de la clase:

```typescript
class CustomFile {
  private static readonly maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }

  protected static isCustomFileTooBig(size: number): boolean {
    return size > CustomFile.maxCustomFileSize;
  }

  constructor(
    private name: string,
    private size: number,
  ) {
    if (CustomFile.isCustomFileTooBig(size)) {
      throw new Error("CustomFile is too big");
    }
  }
}

CustomFile.isCustomFile(new CustomFile("open-world.jpeg", 1000)); // true
```

A los métodos y las propiedades estáticos también se les pueden asignar los modificadores de acceso `public`, `protected` y `private`, y el modificador de inmutabilidad `readonly`. Esto permite limitar el uso de las propiedades y los métodos a la clase actual o a sus subclases.

Las propiedades y los métodos estáticos se heredan, y una subclase puede sobrescribirlos, igual que en JavaScript:

```typescript
class CustomFile {
  static maxCustomFileSize = 1000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof CustomFile;
  }
}

class ImageCustomFile extends CustomFile {
  static maxCustomFileSize = 2000;

  static isCustomFile(file: CustomFile): boolean {
    return file instanceof ImageCustomFile;
  }
}

const file = new ImageCustomFile();

console.log(ImageCustomFile.maxCustomFileSize); // 2000
console.log(ImageCustomFile.isCustomFile(file)); // true
```

Aquí `ImageCustomFile` declara sus propios `maxCustomFileSize` e `isCustomFile`, y al acceder por el nombre de la subclase se obtienen justo esos.

TypeScript añade un requisito: el tipo de la propiedad o el método sobrescrito debe seguir siendo compatible con el del padre. Si en lugar de un número ponemos una cadena, el código no compilará:

```typescript
class TextCustomFile extends CustomFile {
  static maxCustomFileSize = "unlimited"; // Error!
}
```

El compilador mostrará `Class static side 'typeof TextCustomFile' incorrectly extends base class static side 'typeof CustomFile'`: la parte estática de la subclase ya no es compatible con la parte estática del padre.

Una subclase que no sobrescribe nada usa las propiedades y los métodos estáticos del padre:

```typescript
class VideoCustomFile extends CustomFile {}

console.log(VideoCustomFile.maxCustomFileSize); // 1000
```
