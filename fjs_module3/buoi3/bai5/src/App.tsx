import { useState } from 'react';
import { attachAuthorization } from './api/interceptor';
import { useAppStore } from './store/useAppStore';

function App() {
  const { token, setToken, toast, showToast, clearToast } = useAppStore(); const [headers, setHeaders] = useState('{}');
  const testRequest = () => { const result = attachAuthorization({ headers: {} }); setHeaders(JSON.stringify(result.headers, null, 2)); showToast(result.headers.Authorization ? 'Đã gắn Authorization header.' : 'Token là null: không gắn header.'); };
  return <main className="app"><h1>Zustand Slices & Vanilla JS</h1><section className="card"><h2>authSlice</h2><p>Token hiện tại: <b>{token ?? 'null'}</b></p><button onClick={() => setToken('jwt-demo-token-123')}>Đăng nhập (tạo token)</button><button onClick={() => setToken(null)}>Đăng xuất</button></section><section className="card"><h2>Axios interceptor mô phỏng</h2><button onClick={testRequest}>Gửi request thử</button><pre>{headers}</pre></section><section className="card"><h2>uiSlice</h2><button onClick={() => showToast('Đây là toast từ uiSlice')}>Hiện toast</button>{toast && <p className="toast">{toast} <button onClick={clearToast}>Đóng</button></p>}</section></main>;
}
export default App;
