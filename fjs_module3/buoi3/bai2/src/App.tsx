import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRevenue } from './api/revenue';

function App() {
  const [tab, setTab] = useState<'revenue' | 'staff'>('revenue');
  const { data, isLoading, isFetching, dataUpdatedAt, refetch } = useQuery({
    queryKey: ['monthly-revenue'], queryFn: getRevenue, staleTime: 5 * 60 * 1000,
  });

  return <main className="app">
    <h1>Dashboard công ty</h1>
    <div className="tabs"><button onClick={() => setTab('revenue')} className={tab === 'revenue' ? 'active' : ''}>Doanh thu</button><button onClick={() => setTab('staff')} className={tab === 'staff' ? 'active' : ''}>Nhân sự</button></div>
    {tab === 'staff' ? <section className="card"><h2>Nhân sự</h2><p>Đây là tab Nhân sự. Quay lại Doanh thu trong 5 phút sẽ dùng dữ liệu cache ngay lập tức.</p></section> : <section className="card">
      <div className="row"><h2>Doanh thu tháng</h2><button onClick={() => refetch()} disabled={isFetching}>{isFetching ? 'Đang làm mới...' : 'Làm mới dữ liệu'}</button></div>
      {isLoading ? <p>Đang tải dữ liệu...</p> : <><p className="amount">{data?.total.toLocaleString('vi-VN')} đ</p><p>{data?.month} · {data?.orders} đơn hàng</p><small>Dữ liệu fresh trong 5 phút. Lần cập nhật: {new Date(dataUpdatedAt).toLocaleTimeString('vi-VN')}</small></>}
    </section>}
  </main>;
}
export default App;
