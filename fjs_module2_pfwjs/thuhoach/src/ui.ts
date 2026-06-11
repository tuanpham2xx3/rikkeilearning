import type { Category, CategoryAlert, Dashboard, Transaction } from "./types";

export function formatCurrency(amount: number): string {
  return amount.toLocaleString("vi-VN") + "đ";
}

export function renderTransactions(
  transactions: Transaction[],
  categories: Category[],
): string {
  return transactions
    .map((tran) => {
      const category = categories.find((cat) => cat.id === tran.categoryId);
      const categoryName =
        tran.type === "income"
          ? "Thu nhập"
          : category !== undefined
            ? category.name
            : "Không rõ";
      const sign = tran.type === "income" ? "+" : "-";

      return `
<li>
  <strong>${categoryName}</strong>
  <span>${sign}${formatCurrency(tran.amount)}</span>
  <p>${tran.note}</p>
  <small>${tran.date}</small>
</li>`;
    })
    .join("");
}

export function renderDashboard(dashboard: Dashboard): string {
  return `
<div>
  <p>Thu nhập: ${formatCurrency(dashboard.totalIncome)}</p>
  <p>Chi tiêu: ${formatCurrency(dashboard.totalExpense)}</p>
  <p>Số dư: ${formatCurrency(dashboard.balance)}</p>
</div>`;
}

export function renderAlerts(alerts: CategoryAlert[]): string {
  return alerts
    .filter((alert) => alert.isOverLimit)
    .map((alert) => {
      return `
<li>
  <strong>${alert.categoryName}</strong>
  <span>${formatCurrency(alert.spent)} / ${formatCurrency(alert.limit)}</span>
</li>`;
    })
    .join("");
}
