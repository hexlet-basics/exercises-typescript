
Con la ayuda de la interfaz proporcionada `IPhonebook` y el tipo `Entry`, implementa la clase `Phonebook`, que representa una guía telefónica con las siguientes propiedades:

- `entries`: la base de datos, un objeto cuyas entradas son nombres como claves y números de teléfono como valores. Esta propiedad debe ser inmutable y solo de lectura
- `get`: un método que devuelve el número de teléfono correspondiente a un nombre
- `set`: un método que guarda un nombre y un número de teléfono en la guía

Ejemplos:

```typescript
const myNote = new Phonebook();
myNote.set("help", 911);
myNote.get("help"); // 911
```
