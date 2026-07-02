import { useEffect, useRef, useState } from 'react';

type UseCountdownResult = {
  secondsLeft: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

function useCountdown(initialSeconds: number): UseCountdownResult {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    if (secondsLeft > 0) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  useEffect(() => {
    if (!isRunning) {
      clearTimer();
      return;
    }

    timerRef.current = window.setInterval(() => {
      setSecondsLeft((currentSeconds) => {
        if (currentSeconds <= 1) {
          setIsRunning(false);
          return 0;
        }

        return currentSeconds - 1;
      });
    }, 1000);

    return clearTimer;
  }, [isRunning]);

  useEffect(() => {
    return clearTimer;
  }, []);

  return {
    secondsLeft,
    isRunning,
    start,
    pause,
    reset,
  };
}

export default useCountdown;
