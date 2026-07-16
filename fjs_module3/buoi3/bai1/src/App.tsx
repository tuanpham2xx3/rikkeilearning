import { useQuery } from '@tanstack/react-query';
import { getOrders } from './api/orders';
import { useFilterStore, type OrderStatus } from './store/filterStore';

const statuses: OrderStatus[] = ['All', 'Pending', 'Shipped', 'Delivered'];
const numberFormat = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

function App() {
  const { status, keyword, setStatus, setKeyword } = useFilterStore();
  const { data: orders = [], isLoading, isFetching, isError } = useQuery({
    queryKey: ['orders', { status, keyword }],
    queryFn: () => getOrders({ status, keyword }),
  });

  return (
    <main className="dashboard">
      <section className="hero">
        <div>
          <p className="eyebrow">OPERATIONS DASHBOARD</p>
          <h1>Đơn hàng</h1>
          <p>Theo dõi và lọc đơn hàng theo thời gian thực.</p>
        </div>
        <div className="query-key">
          <span>Query key đang dùng</span>
          <code>[&apos;orders&apos;, &#123; status: &apos;{status}&apos;, keyword: &apos;{keyword || '∅'}&apos; &#125;]</code>
        </div>
      </section>

      <section className="panel">
        <div className="filters">
          <label className="search">
            <span>Tìm kiếm</span>
            <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Mã đơn, khách hàng, sản phẩm..." />
          </label>
          <div className="status-filter">
            <span>Trạng thái</span>
            <div className="chips">
              {statuses.map((item) => (
                <button key={item} className={item === status ? 'chip chip--active' : 'chip'} onClick={() => setStatus(item)}>
                  {item === 'All' ? 'Tất cả' : item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="table-heading">
          <strong>{isLoading ? 'Đang tải...' : `${orders.length} đơn hàng`}</strong>
          {isFetching && !isLoading && <span className="syncing"><i /> Đang đồng bộ</span>}
        </div>

        {isError ? <p className="message error">Không thể tải danh sách đơn hàng.</p> : isLoading ? <div className="message">Đang lấy dữ liệu từ máy chủ...</div> : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Sản phẩm</th><th>Tổng tiền</th><th>Trạng thái</th></tr></thead>
              <tbody>{orders.map((order) => <tr key={order.id}><td className="order-id">{order.id}</td><td>{order.customer}</td><td>{order.product}</td><td>{numberFormat.format(order.total)}</td><td><span className={`badge badge--${order.status.toLowerCase()}`}>{order.status}</span></td></tr>)}</tbody>
            </table>
            {!orders.length && <p className="message">Không tìm thấy đơn hàng phù hợp.</p>}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
