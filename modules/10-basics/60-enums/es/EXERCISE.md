
1. Implementa la enumeración `ModalStatus` con dos valores: Opened y Closed
2. Implementa la función `buildModal()`. Devuelve un objeto que describe una ventana modal. Parámetros de la función:

    - El texto que debe estar dentro de la ventana después de la inicialización;
    - El estado con el que hay que crear el objeto de la ventana.

   La función devuelve un objeto con dos campos: `text` (aquí se guarda el texto pasado) y `status` (aquí se guarda el estado pasado)

```typescript
const modal = buildModal("hexlet forever", ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }
```
