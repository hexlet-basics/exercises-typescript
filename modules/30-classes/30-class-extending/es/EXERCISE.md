
Implementa la clase `HttpError`, que debe heredar de la clase incorporada `Error` y recibir como primer parámetro el código de error y como segundo, `message`. Implementa también las clases `NotFoundError`, `UnauthorizedError` y `ForbiddenError`. Cada una debe heredar de la clase `HttpError` y tener la propiedad `status`, igual al código de error, y `message`, el mensaje que se pasa a la clase base. Los códigos de error son `404`, `401` y `403`.

```typescript
import { NotFoundError } from "./errors";

const error = new NotFoundError("Not Found");
console.log(error.status); // 404
console.log(error.message); // Not Found
```
