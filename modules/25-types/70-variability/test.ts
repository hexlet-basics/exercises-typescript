import * as ta from 'type-assertions';
import { expect, test } from 'vitest';
import applyTransactions, { Transaction, Wallet } from './index';

test('applyTransactions', () => {
  const wallet: Wallet = {
    balance: 100,
    transactions: [
      {
        apply: (amount: number) => amount + 10,
      },
      {
        apply: (amount: number) => amount - 20,
      },
      {
        apply: (amount: number) => amount + 30,
      },
    ],
  };

  expect(applyTransactions(wallet)).toBe(120);
  expect(wallet.balance).toBe(100);

  const wallet2: Wallet = {
    balance: 10,
    transactions: [
      {
        apply: (amount: number) => amount + 10,
      },
      {
        apply: () => {
          throw new Error('Error');
        },
      },
      {
        apply: (amount: number) => amount + 30,
      },
    ],
  };

  expect(applyTransactions(wallet2)).toBe(10);

  ta.assert<ta.Equal<Parameters<Transaction['apply']>, [number]>>();
});
