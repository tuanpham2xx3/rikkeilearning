import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={isDarkMode ? 'header header--dark' : 'header'}>
      <h1>Nền tảng học tập</h1>
      <button onClick={toggleTheme}>{isDarkMode ? 'Tắt Dark Mode' : 'Bật Dark Mode'}</button>
    </header>
  );
}

export default Header;
