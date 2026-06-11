import type { Category, CategoryAlert, Dashboard, Transaction } from "./types";

export function calculateDashboard(transactions: Transaction[]): Dashboard {
  const totalIncome = transactions
    .filter((tran) => tran.type === "income")
    .reduce((acc, tran) => acc + tran.amount, 0);

  const totalExpense = transactions
    .filter((tran) => tran.type === "expense")
    .reduce((acc, tran) => acc + tran.amount, 0);

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
  };
}

export function checkCategoryAlerts(
  categories: Category[],
  transactions: Transaction[],
  month: number,
  year: number,
): CategoryAlert[] {
  return categories.map((cat) => {
    const spent = transactions
      .filter((tran) => {
        const date = new Date(tran.date);

        return (
          tran.categoryId === cat.id &&
          tran.type === "expense" &&
          date.getMonth() + 1 === month &&
          date.getFullYear() === year
        );
      })
      .reduce((acc, tran) => acc + tran.amount, 0);

    return {
      categoryId: cat.id,
      categoryName: cat.name,
      limit: cat.limit,
      spent,
      isOverLimit: spent > cat.limit,
    };
  });
}
