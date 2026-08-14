В JavaScript `Promise` — это самый популярный способ работы с асинхронным кодом. Они позволяют избежать callback hell и упрощают работу с асинхронными функциями. TypeScript также поддерживает привычный синтаксис для работы с Promise в виде async/await и типизацию:

```typescript
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42)
  }, 1000)
})
```

`Promise` — это дженерик с типом, который будет возвращен в случае успешного выполнения. В примере выше это тип `number`.

Чтобы продолжать работать в одном стиле с функциями, которые принимают callback, мы можем промисифицировать их. Для этого нам нужно обернуть функцию в `Promise`:

```typescript
const wait = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}
```

Мы можем и не описывать тип возвращаемого значения — TypeScript сможет его вывести из типа, который мы передаем в `Promise`. Кроме того, `Promise` возвращается автоматически из любой функции, помеченной как `async`. Тип возвращаемого значения будет обернут в `Promise`:

```typescript
const getHours = async () => {
  return new Date().getHours()
}

const hoursPromise: Promise<number> = getHours()
```

Как и контейнер, `Promise` заворачивает значения внутри себя, поэтому мы можем использовать `await` для получения значения из него:

```typescript
const hours = await getHours()
```

В TypeScript `await` используется так же, как в JavaScript.

В итоге, `Promise` и `async/await` позволяют писать асинхронный код в синхронном стиле, что сильно упрощает работу с асинхронным кодом. TypeScript поддерживает этот синтаксис и с помощью дженериков позволяет нам использовать его со всей мощью типизации.
