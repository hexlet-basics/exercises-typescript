
You are given several interfaces. Based on them, create the ISuperman interface. ISuperMan must have a guessWho method that accepts and returns a string.

Based on the ISuperMan interface, create a `superMan` object. The guessWho method should work as follows: if any value other than superman (in any case) comes as a string in the argument, it should return the guess ‘It's a ${value}?’, otherwise ‘It's a ${value}!’.

```typescript
console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane')); "It's a plane?";
console.log(superMan.guessWho('superman')); "It's a superman!";
```
