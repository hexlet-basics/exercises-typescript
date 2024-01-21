
Реализуйте класс `HttpError`, который должен наследоваться от встроенного класса `Error` и принимать первым параметром код ошибки, а вторым — `message`. Также реализуйте классы `NotFoundError`, `UnauthorizedError`, `ForbiddenError`. Каждый из них должен наследоваться от класса `HttpError` и иметь свойство `status`, которое равно коду ошибки и `message` — сообщение, передающееся в базовый класс. Коды ошибок: `404`, `401`, `403`. 

```typescript
import { NotFoundError } from './errors';

const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found
```
