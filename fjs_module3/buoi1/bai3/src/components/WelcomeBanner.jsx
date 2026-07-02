function WelcomeBanner({ isLoggedIn }) {
  return (
    <div className="welcome-banner">
      {isLoggedIn ? (
        <h2>Chào mừng trở lại</h2>
      ) : (
        <button className="login-button">Đăng nhập ngay</button>
      )}
    </div>
  );
}

export default WelcomeBanner;
