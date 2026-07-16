export type ViolationOrder = { id: number; customer: string; processed: boolean };
export const getViolationOrders = async (): Promise<ViolationOrder[]> => [{ id: 1, customer: 'Công ty An Phát', processed: false }, { id: 2, customer: 'Shop Minh Long', processed: false }];
export async function processOrder(id: number) { await new Promise((resolve) => setTimeout(resolve, 2000)); if (id === 2) throw new Error('Máy chủ từ chối xử lý đơn này'); return id; }
