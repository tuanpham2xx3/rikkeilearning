export type TransactionType = "income" | "expense";
export type SortType = "asc" | "desc";

export interface Category {
  id: string;
  name: string;
  limit: number;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  categoryId: string;
  note: string;
  date: string;
}

export interface MonthlySummary {
  month: number;
  year: number;
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export type MonthlySummery = MonthlySummary;

export interface Dashboard {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

export interface CategoryAlert {
  categoryId: string;
  categoryName: string;
  limit: number;
  spent: number;
  isOverLimit: boolean;
}

export interface AppState {
  categories: Category[];
  transactions: Transaction[];
  selectedMonth: number;
  selectedYear: number;
  selectedSort?: SortType;
}

export interface TransactionInput {
  type: TransactionType;
  amount: number;
  categoryId: string;
  note: string;
  date: string;
}
