import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="page">
      <section className="box">
        <h1>Trang chủ</h1>
        <p>Chọn phòng học ảo để kiểm tra luồng Protected Route.</p>
        <Link className="button-link" to="/virtual-class">
          Vào phòng học ảo
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
