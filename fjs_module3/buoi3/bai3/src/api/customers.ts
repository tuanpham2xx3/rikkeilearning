export type Customer = { id: number; name: string; email: string };
export async function getCustomers(): Promise<Customer[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [{ id: 1, name: 'Nguyễn Văn An', email: 'an@gmail.com' }, { id: 2, name: 'Trần Mai Lan', email: 'lan@gmail.com' }, { id: 3, name: 'Lê Minh Tú', email: 'tu@gmail.com' }];
}
