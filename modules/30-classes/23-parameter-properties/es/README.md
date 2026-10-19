Rellenar propiedades a partir de los parámetros del constructor es una tarea frecuente al trabajar con clases. Por eso, en TypeScript se añadió una sintaxis especial que permite hacerlo de forma automática:

```typescript
class SomeClass {
  constructor(
    public one: number,
    private two: string,
  ) {}

  get three(): string {
    return `${this.one} ${this.two}`;
  }
}
```

Este código hace lo mismo que este:

```typescript
class SomeClass {
  public one: number;

  private two: string;

  constructor(one: number, two: string) {
    this.one = one;
    this.two = two;
  }

  get three(): string {
    return `${this.one} ${this.two}`;
  }
}
```

La nueva sintaxis evita duplicar el código que rellena las propiedades a partir de los parámetros y lo hace más conciso. Si en el constructor hay alguna lógica, las propiedades se siguen rellenando a mano.
