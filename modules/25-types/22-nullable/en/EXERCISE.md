
Implement the `formatPrice()` function, which takes a number and returns a string rounded to two decimal places. If `null` or `undefined` is passed, it should return `'$0.00'`.

```typescript
formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'
```
