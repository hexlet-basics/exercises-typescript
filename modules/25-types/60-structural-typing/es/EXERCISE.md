
Describe el tipo de estado `DataState` y la enumeración `LoadingStatus`. Luego implementa la función `handleData()`, que recibe un `DataState` y devuelve una cadena según el estado: `loading...` con `LoadingStatus.Loading`, `error` con `LoadingStatus.Error` y la cadena obtenida del campo numérico `data` con `LoadingStatus.Success`. Si el estado no está en la enumeración, la función devuelve `unknown`.

```typescript
const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error("error") };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
```
