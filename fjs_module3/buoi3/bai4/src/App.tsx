import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getViolationOrders, processOrder, type ViolationOrder } from './api/violations';

function App() {
  const client = useQueryClient(); const [error, setError] = useState('');
  const { data: orders = [] } = useQuery({ queryKey: ['violation-orders'], queryFn: getViolationOrders });
  const mutation = useMutation({
    mutationFn: processOrder,
    onMutate: async (id) => { setError(''); await client.cancelQueries({ queryKey: ['violation-orders'] }); const previous = client.getQueryData<ViolationOrder[]>(['violation-orders']); client.setQueryData<ViolationOrder[]>(['violation-orders'], (old = []) => old.map((order) => order.id === id ? { ...order, processed: true } : order)); return { previous }; },
    onError: (err, _id, context) => { client.setQueryData(['violation-orders'], context?.previous); setError(err.message); },
    onSettled: () => client.invalidateQueries({ queryKey: ['violation-orders'] }),
  });
  return <main className="app"><h1>Đơn hàng vi phạm</h1><p>Bấm xử lý: UI đổi màu ngay, API mô phỏng phản hồi sau 2 giây. Đơn số 2 cố ý lỗi để kiểm tra rollback.</p>{error && <p className="error">{error} — dữ liệu đã được khôi phục.</p>}<section className="card">{orders.map((order) => <div className="order" key={order.id}><span>{order.customer}</span><span className={order.processed ? 'done' : 'pending'}>{order.processed ? 'Đã xử lý' : 'Chờ xử lý'}</span>{!order.processed && <button disabled={mutation.isPending} onClick={() => mutation.mutate(order.id)}>Đánh dấu đã xử lý</button>}</div>)}</section></main>;
}
export default App;
