import { useQuery } from '@tanstack/react-query';
import { getCustomers } from './api/customers';

function App() {
  const { data = [], isLoading, isFetching, refetch } = useQuery({ queryKey: ['customers'], queryFn: getCustomers, refetchInterval: 10 * 60 * 1000 });
  return <main className="app"><div className="heading"><div><h1>Khách hàng</h1><p>Tự làm mới ngầm mỗi 10 phút.</p></div><button onClick={() => refetch()}>Thử làm mới</button></div>
    {isLoading ? <div className="skeleton"><i /><i /><i /></div> : <section className="card"><table><thead><tr><th>ID</th><th>Họ tên</th><th>Email</th></tr></thead><tbody>{data.map((customer) => <tr key={customer.id}><td>{customer.id}</td><td>{customer.name}</td><td>{customer.email}</td></tr>)}</tbody></table></section>}
    {isFetching && !isLoading && <span className="fetching">● Đang đồng bộ dữ liệu...</span>}
  </main>;
}
export default App;
