import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VirtualClassPage from './pages/VirtualClassPage';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Trang chủ</Link>
        <Link to="/virtual-class">Phòng học ảo</Link>
        <Link to="/login">Đăng nhập</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/virtual-class"
          element={
            <ProtectedRoute>
              <VirtualClassPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
