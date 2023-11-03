// BEGIN
type Transaction = { apply: (amount: number) => number } | { apply: () => never };

type Wallet = {
  transactions: Transaction[];
  balance: number;
};

const applyTransactions = (wallet: Wallet) => {
  try {
    let { balance } = wallet;

    wallet.transactions.forEach((transaction) => {
      balance = transaction.apply(balance);
    });
    return balance;
  } catch (e) {
    return wallet.balance;
  }
};
// END

export type { Transaction, Wallet };
export default applyTransactions;
