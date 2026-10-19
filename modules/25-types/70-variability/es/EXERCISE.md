
Implementa la función `applyTransactions(wallet)` y los tipos `Transaction` y `Wallet`. `Wallet` contiene la lista de transacciones como un array de elementos de tipo `Transaction` y un saldo numérico. `Transaction` contiene el método `apply`, que recibe el saldo y devuelve el nuevo saldo.

La función `applyTransactions(wallet)` debe recibir un argumento de tipo `Wallet` y devolver el saldo después de aplicar toda la lista de transacciones. Si hay un error en una de las transacciones, debe devolver el saldo inicial y no seguir aplicando transacciones.

```typescript
const wallet: Wallet = {
  transactions: [
    {
      apply: (amount) => amount + 1,
    },
  ],
  balance: 0,
};

console.log(applyTransactions(wallet)); // 1
```
