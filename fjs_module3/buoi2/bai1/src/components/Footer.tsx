import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={isDarkMode ? 'footer footer--dark' : 'footer'}>
      <p>{isDarkMode ? 'Đang dùng giao diện ban đêm' : 'Đang dùng giao diện ban ngày'}</p>
    </footer>
  );
}

export default Footer;
