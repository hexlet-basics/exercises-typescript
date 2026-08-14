Заполнение свойств из параметров конструктора — это частая задача в работе с классами. Поэтому в TypeScript добавили специальный синтаксис, который позволяет делать это автоматически:

```typescript
class SomeClass {
  constructor(public one: number, private two: string) {}

  get three(): string {
    return `${this.one} ${this.two}`
  }
}
```

Этот код делает то же самое, что и этот:

```typescript
class SomeClass {
  public one: number

  private two: string

  constructor(one: number, two: string) {
    this.one = one
    this.two = two
  }

  get three(): string {
    return `${this.one} ${this.two}`
  }
}
```

Новый синтаксис позволяет не дублировать код заполнения свойств из параметров и делает его более лаконичным. Если в конструкторе есть какая-то логика, то свойства все равно заполняются вручную.
