
Implement the `HttpError` class, which must inherit from the built-in `Error` class and accept the error code as the first parameter and `message` as the second. Also implement classes `NotFoundError`, `UnauthorisedError`, `ForbiddenError`. Each of them should inherit from the `HttpError` class and have the `status` property, which is equal to the error code and `message` - the message passed to the base class. The error codes are: `404`, `401`, `403`.

```typescript
import { NotFoundError } from './errors';

const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found
```
