
Tienes varias interfaces. Basándote en ellas, crea la interfaz `ISuperman`. Debe tener un método `guessWho`, que recibe y devuelve una cadena.

Basándote en la interfaz `ISuperman`, crea el objeto `superMan`. El método `guessWho` debe funcionar así: si el argumento es cualquier cadena distinta de superman (en cualquier combinación de mayúsculas y minúsculas), debe devolver la suposición "It's a ${value}?"; de lo contrario, "It's a ${value}!".

```typescript
console.log(superMan.guessWho("bird")); // "It's a bird?";
console.log(superMan.guessWho("plane")); // "It's a plane?";
console.log(superMan.guessWho("superman")); // "It's a superman!";
```
