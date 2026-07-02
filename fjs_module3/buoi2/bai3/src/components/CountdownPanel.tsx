import useCountdown from '../hooks/useCountdown';

type CountdownPanelProps = {
  title: string;
  initialSeconds: number;
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function CountdownPanel({ title, initialSeconds }: CountdownPanelProps) {
  const { secondsLeft, isRunning, start, pause, reset } = useCountdown(initialSeconds);

  return (
    <section className="timer-card">
      <h2>{title}</h2>
      <p className="time">{formatTime(secondsLeft)}</p>
      {secondsLeft === 0 && <p className="done">Đã hết thời gian</p>}

      <div className="actions">
        <button onClick={start} disabled={isRunning || secondsLeft === 0}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default CountdownPanel;
