import { useState } from 'react';
import WelcomeBanner from './components/WelcomeBanner.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main className="page">
      <section className="box">
        <h1>Conditional Rendering</h1>
        <WelcomeBanner isLoggedIn={isLoggedIn} />

        <button onClick={handleToggleLogin}>
          {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập thử'}
        </button>
      </section>
    </main>
  );
}

export default App;
