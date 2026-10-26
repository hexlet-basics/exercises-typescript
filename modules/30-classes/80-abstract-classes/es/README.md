Cuando necesitamos definir un comportamiento común para varias clases, conviene usar clases abstractas, que veremos en esta lección.

No se puede crear una instancia de una clase abstracta directamente, pero sí se puede heredar de ella. Además, una clase abstracta puede indicar explícitamente qué método deben implementar las subclases:

```typescript
abstract class CustomFile {
  protected name: string;

  protected size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  // Implementación lista, la subclase recibe el método tal cual
  sizeInKb(): number {
    return this.size / 1024;
  }

  // Solo la firma, la subclase debe implementar el método
  abstract open(): void;
}

class ImageCustomFile extends CustomFile {
  // Sin open() TypeScript dará un error de compilación
  open(): void {
    console.log(`Abriendo la imagen ${this.name}`);
  }
}
```

Para extraer de las clases la parte común del código, las clases abstractas se usan mucho al construir la arquitectura de aplicaciones y frameworks. Por ejemplo, en React existe la clase `Component`, que puede representarse como una clase abstracta. No podemos crearla directamente, pero exige a sus subclases que implementen el método `render`. Esto permite crear componentes que se renderizan al inicializarse:

```typescript
abstract class Component {
  abstract render(): void;

  constructor() {
    this.render();
  }
}
```
