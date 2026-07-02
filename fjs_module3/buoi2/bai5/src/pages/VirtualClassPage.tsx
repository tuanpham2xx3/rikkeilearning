import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function VirtualClassPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <main className="page">
      <section className="box">
        <h1>Phòng học ảo</h1>
        <p>Đây là nội dung độc quyền, chỉ người dùng đã đăng nhập mới xem được.</p>
        <button onClick={handleLogout}>Đăng xuất</button>
      </section>
    </main>
  );
}

export default VirtualClassPage;
