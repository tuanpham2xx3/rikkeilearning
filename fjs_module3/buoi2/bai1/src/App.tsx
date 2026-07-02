import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
