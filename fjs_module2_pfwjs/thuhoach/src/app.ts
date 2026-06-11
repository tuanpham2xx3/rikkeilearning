import type { AppState, TransactionInput } from "./types";
import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "./category.service";
import { calculateDashboard, checkCategoryAlerts } from "./dashboard.service";
import { loadFromStorage, saveToStorage } from "./storage";
import {
  addTransaction,
  deleteTransaction,
  sortTransactionsDesc,
  updateTransaction,
} from "./transaction.service";
import { renderAlerts, renderDashboard, renderTransactions } from "./ui";

const STORAGE_KEY = "expense_app_state";

export function createInitialState(): AppState {
  const now = new Date();

  return {
    categories: [],
    transactions: [],
    selectedMonth: 0,
    selectedYear: now.getFullYear(),
    selectedSort: "desc",
  };
}

export function addCategoryToState(
  state: AppState,
  name: string,
  limit: number,
): AppState {
  return {
    ...state,
    categories: addCategory(state.categories, name, limit),
  };
}

export function updateCategoryToState(
  state: AppState,
  categoryId: string,
  data: {
    name?: string;
    limit?: number;
  },
): AppState {
  return {
    ...state,
    categories: updateCategory(state.categories, categoryId, data),
  };
}

export function deleteCategoryToState(
  state: AppState,
  categoryId: string,
): AppState {
  return {
    ...state,
    categories: deleteCategory(state.categories, categoryId),
  };
}

export function addTransactionToState(
  state: AppState,
  data: TransactionInput,
): AppState {
  return {
    ...state,
    transactions: addTransaction(state.transactions, data),
  };
}

export function updateTransactionToState(
  state: AppState,
  transactionId: string,
  data: Partial<TransactionInput>,
): AppState {
  return {
    ...state,
    transactions: updateTransaction(state.transactions, transactionId, data),
  };
}

export function deleteTransactionToState(
  state: AppState,
  transactionId: string,
): AppState {
  return {
    ...state,
    transactions: deleteTransaction(state.transactions, transactionId),
  };
}

export function changeSelectedMonthToState(
  state: AppState,
  month: number,
  year: number,
): AppState {
  if (month < 1 || month > 12) {
    throw new Error("Thang phai nam trong khoang 1 den 12");
  }

  return {
    ...state,
    selectedMonth: month,
    selectedYear: year,
  };
}

export function loadState(): AppState {
  return loadFromStorage(STORAGE_KEY, createInitialState());
}

export function saveState(state: AppState): void {
  saveToStorage(STORAGE_KEY, state);
}

export function renderApp(state: AppState): void {
  const transactionsElement = document.querySelector("#transactions");
  const dashboardElement = document.querySelector("#dashboard");
  const alertsElement = document.querySelector("#alerts");

  const sortedTransactions = sortTransactionsDesc(state.transactions);
  const dashboard = calculateDashboard(state.transactions);
  const alerts = checkCategoryAlerts(
    state.categories,
    state.transactions,
    state.selectedMonth,
    state.selectedYear,
  );

  if (transactionsElement !== null) {
    transactionsElement.innerHTML = renderTransactions(
      sortedTransactions,
      state.categories,
    );
  }

  if (dashboardElement !== null) {
    dashboardElement.innerHTML = renderDashboard(dashboard);
  }

  if (alertsElement !== null) {
    alertsElement.innerHTML = renderAlerts(alerts);
  }
}
