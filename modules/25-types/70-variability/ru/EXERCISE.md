
Реализуйте функцию `applyTransactions(wallet)` и типы `Transaction`, `Wallet`. `Wallet` содержит список транзакций в виде массива элементов типа `Transaction` и числовой баланс. `Transaction` содержит метод `apply`, который принимает баланс и возвращает новый баланс.

Функция `applyTransactions(wallet)` должна принимать аргумент типа `Wallet` и возвращать баланс после применения всего списка транзакций. В случае ошибки в одной из транзакций должно вернуться изначальный баланс, и не продолжать применять транзакции.

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
