
Implement the function `applyTransactions(wallet)` and types `Transaction`, `Wallet`. `Wallet` contains a list of transactions as an array of elements of type `Transaction` and a numeric balance. `Transaction` contains an `apply` method that accepts a balance and returns a new balance.

The `applyTransactions(wallet)` function must take an argument of type `Wallet` and return the balance after the entire transaction list has been applied. In case of an error in one of the transactions, it should return the original balance and not continue applying transactions.

```typescript
const wallet: Wallet = {
  transactions: [
    {
      apply: (amount) => amount + 1,
    },
  ],
  balance: 0
}

console.log(applyTransactions(wallet)) // 1
```
