
Describe the `DataState` state type and the `LoadingStatus` enumeration. Then implement a `handleData()` function that takes `DataState` as input and returns a string depending on the state: `loading...` at `LoadingStatus.loading`, `error` at `LoadingStatus.error`, a string from the numeric field `data` at `LoadingStatus.success`. If the status is not included in the enumeration, the function returns `unknown`.

```typescript
const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
```
