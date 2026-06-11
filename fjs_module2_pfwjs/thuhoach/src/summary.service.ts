import type { MonthlySummary, Transaction } from "./types";

export function generateMonthlySummary(
  transactions: Transaction[],
): MonthlySummary[] {
  const keys = transactions.map((tran) => {
    const date = new Date(tran.date);
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  });

  const uniqueKeys = [...new Set(keys)];

  return uniqueKeys.map((key) => {
    const [year, month] = key.split("-").map(Number);

    const totalIncome = transactions
      .filter((tran) => {
        const date = new Date(tran.date);

        return (
          tran.type === "income" &&
          date.getMonth() + 1 === month &&
          date.getFullYear() === year
        );
      })
      .reduce((acc, tran) => acc + tran.amount, 0);

    const totalExpense = transactions
      .filter((tran) => {
        const date = new Date(tran.date);

        return (
          tran.type === "expense" &&
          date.getMonth() + 1 === month &&
          date.getFullYear() === year
        );
      })
      .reduce((acc, tran) => acc + tran.amount, 0);

    return {
      month,
      year,
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
    };
  });
}
