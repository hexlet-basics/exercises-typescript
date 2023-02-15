import * as ta from "type-assertions";
import applyTransactions, { Transaction, Wallet } from "./index";

test("applyTransactions", () => {
  const wallet: Wallet = {
    balance: 100,
    transactions: [
      (amount: number) => amount + 10,
      (amount: number) => amount - 20,
      (amount: number) => amount + 30,
    ],
  };

  expect(applyTransactions(wallet)).toBe(110);

  const wallet2: Wallet = {
    balance: 10,
    transactions: [
      (amount: number) => amount + 10,
      () => {
        throw new Error("Error");
      },
      (amount: number) => amount + 30,
    ],
  };

  expect(applyTransactions(wallet2)).toBe(10);

  ta.assert<ta.Equal<Parameters<Transaction["apply"]>, [number]>>();
});
