import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type LocationState = {
  from?: string;
};

function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const returnPath = state?.from ?? '/virtual-class';

  const handleLogin = () => {
    login();
    navigate(returnPath, { replace: true });
  };

  if (isAuthenticated) {
    return <Navigate to="/virtual-class" replace />;
  }

  return (
    <main className="page">
      <section className="box">
        <h1>Đăng nhập</h1>
        <p>Bấm nút bên dưới để mô phỏng xác thực thành công.</p>
        <button onClick={handleLogin}>Đăng nhập</button>
      </section>
    </main>
  );
}

export default LoginPage;
