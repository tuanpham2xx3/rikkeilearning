import type {
  SortType,
  Transaction,
  TransactionInput,
  TransactionType,
} from "./types";

export function validateTransactionInput(data: TransactionInput): string[] {
  const errors: string[] = [];

  if (data.amount <= 0) {
    errors.push("Số tiền phải lớn hơn 0");
  }

  if (data.type === "expense" && data.categoryId.trim() === "") {
    errors.push("Vui lòng chọn danh mục");
  }

  if (data.date.trim() === "") {
    errors.push("Vui lòng chọn ngày giao dịch");
  }

  if (data.type !== "income" && data.type !== "expense") {
    errors.push("Loại giao dịch không hợp lệ");
  }

  return errors;
}

export function addTransaction(
  transactions: Transaction[],
  data: TransactionInput,
): Transaction[] {
  const errors = validateTransactionInput(data);

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  const newTransaction: Transaction = {
    id: `tran_${crypto.randomUUID()}`,
    type: data.type,
    amount: data.amount,
    categoryId: data.type === "income" ? "" : data.categoryId,
    note: data.note,
    date: data.date,
  };

  return [...transactions, newTransaction];
}

export function updateTransaction(
  transactions: Transaction[],
  transactionId: string,
  data: {
    type?: TransactionType;
    amount?: number;
    categoryId?: string;
    note?: string;
    date?: string;
  },
): Transaction[] {
  if (
    data.type !== undefined &&
    data.type !== "income" &&
    data.type !== "expense"
  ) {
    throw new Error("Loại giao dịch không hợp lệ");
  }

  if (data.amount !== undefined && data.amount <= 0) {
    throw new Error("Số tiền phải lớn hơn 0");
  }

  return transactions.map((tran) => {
    if (tran.id !== transactionId) {
      return tran;
    }

    const nextType = data.type !== undefined ? data.type : tran.type;

    return {
      ...tran,
      type: nextType,
      amount: data.amount !== undefined ? data.amount : tran.amount,
      categoryId:
        nextType === "income"
          ? ""
          : data.categoryId !== undefined
            ? data.categoryId
            : tran.categoryId,
      note: data.note !== undefined ? data.note : tran.note,
      date: data.date !== undefined ? data.date : tran.date,
    };
  });
}

export function deleteTransaction(
  transactions: Transaction[],
  transactionId: string,
): Transaction[] {
  return transactions.filter((tran) => tran.id !== transactionId);
}

export function filterTransactionsByMonth(
  transactions: Transaction[],
  month: number,
  year: number,
): Transaction[] {
  return transactions.filter((tran) => {
    const date = new Date(tran.date);

    return date.getMonth() + 1 === month && date.getFullYear() === year;
  });
}

export function sortTransactions(
  transactions: Transaction[],
  type: SortType,
): Transaction[] {
  if (type === "desc") {
    return [...transactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  return [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

export function sortTransactionsDesc(
  transactions: Transaction[],
): Transaction[] {
  return sortTransactions(transactions, "desc");
}
