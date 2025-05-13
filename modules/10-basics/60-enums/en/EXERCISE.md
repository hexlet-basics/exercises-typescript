
1. Implement a `ModalStatus` enumeration with two values: Opened and Closed
2. Implement the `buildModal()` function. It returns an object that describes a modal window. Function parameters:

  * The text that should be inside the window after initialization
  * Status with which to create a window object

The function returns an object with two fields: `text` (here the transmitted text is stored) and `status` (here the transmitted status is stored)

```typescript
const modal = buildModal('hexlet forever', ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }
```
