// BEGIN
type Transaction = {
  apply: (amount: number) => number;
};

type Wallet = {
  transactions: Transaction[];
  balance: number;
};

const applyTransactions = (wallet: Wallet) => {
  try {
    let balance = wallet.balance;
    for (const transaction of wallet.transactions) {
      balance = transaction.apply(balance);
    }
    return balance;
  } catch (e) {
    return wallet.balance;
  }
};
// END

export type { Transaction, Wallet };
export default applyTransactions;
