import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getInventory, updateQuantity } from './api/inventory';
import { useInventoryStore } from './store/inventoryStore';

function Sidebar() {
  const client = useQueryClient(); const { selectedItem, closeSidebar } = useInventoryStore(); const [quantity, setQuantity] = useState(''); const [error, setError] = useState('');
  useEffect(() => { setQuantity(selectedItem ? String(selectedItem.quantity) : ''); setError(''); }, [selectedItem]);
  const mutation = useMutation({ mutationFn: updateQuantity, onSuccess: () => { client.invalidateQueries({ queryKey: ['inventory'] }); closeSidebar(); }, onError: (err) => setError(err.message) });
  if (!selectedItem) return null;
  const save = () => { const value = Number(quantity); if (!Number.isInteger(value) || value < 0) { setError('Số lượng phải là số nguyên không âm.'); return; } mutation.mutate({ id: selectedItem.id, quantity: value }); };
  return <aside className="sidebar"><h2>Cập nhật tồn kho</h2><p>{selectedItem.name}</p><label>Số lượng<input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></label>{error && <p className="error">{error}</p>}<button onClick={save} disabled={mutation.isPending}>{mutation.isPending ? 'Đang lưu...' : 'Lưu'}</button><button onClick={closeSidebar}>Huỷ</button></aside>;
}
function App() { const { data = [], isLoading } = useQuery({ queryKey: ['inventory'], queryFn: getInventory }); const selectItem = useInventoryStore((s) => s.selectItem); return <main className="app"><h1>Kiểm kê kho</h1><div className="layout"><section className="card">{isLoading ? <p>Đang tải...</p> : <table><thead><tr><th>Hàng hoá</th><th>Tồn kho</th><th></th></tr></thead><tbody>{data.map((item) => <tr key={item.id}><td>{item.name}</td><td>{item.quantity}</td><td><button onClick={() => selectItem(item)}>Sửa</button></td></tr>)}</tbody></table>}</section><Sidebar /></div></main>; }
export default App;
