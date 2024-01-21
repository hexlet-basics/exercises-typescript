
Опишите тип состояния `DataState` и перечисление `LoadingStatus`. Затем реализуйте функцию `handleData()`, которая принимает на вход `DataState` и возвращает строку в зависимости от состояния: `loading...` при  `LoadingStatus.loading`, `error` при `LoadingStatus.error`, строку из числового поля `data` при `LoadingStatus.success`. Если статус не входит в перечисление, функция возвращает `unknown`.

```typescript
const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
```
