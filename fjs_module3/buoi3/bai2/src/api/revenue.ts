export type Revenue = { month: string; total: number; orders: number };

export async function getRevenue(): Promise<Revenue> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { month: 'Tháng 7/2026', total: 248_500_000, orders: 342 };
}
