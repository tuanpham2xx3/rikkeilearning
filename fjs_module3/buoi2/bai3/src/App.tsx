import CountdownPanel from './components/CountdownPanel';

function App() {
  return (
    <main className="page">
      <h1>Custom Hook Countdown</h1>

      <div className="grid">
        <CountdownPanel title="Bài kiểm tra trắc nghiệm" initialSeconds={60} />
        <CountdownPanel title="Sự kiện Flash Sale" initialSeconds={30} />
      </div>
    </main>
  );
}

export default App;
