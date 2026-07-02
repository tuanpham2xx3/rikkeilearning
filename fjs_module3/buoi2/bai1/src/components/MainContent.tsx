import { useTheme } from '../contexts/ThemeContext';

function MainContent() {
  const { theme, isDarkMode } = useTheme();

  return (
    <main className={isDarkMode ? 'main-content main-content--dark' : 'main-content'}>
      <h2>Khóa học React TypeScript</h2>
      <p>Theme hiện tại: {theme === 'dark' ? 'Ban đêm' : 'Ban ngày'}</p>
      <p>MainContent lấy dữ liệu theme trực tiếp từ Context, không nhận props từ App.</p>
    </main>
  );
}

export default MainContent;
