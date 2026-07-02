import { Component } from 'react';

const POMODORO_TIME = 25 * 60;

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: POMODORO_TIME,
      isRunning: false,
      message: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isRunning && this.state.isRunning) {
      this.startTimer();
    }

    if (prevState.isRunning && !this.state.isRunning) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timeLeft <= 1) {
          return {
            timeLeft: 0,
            isRunning: false,
            message: 'Hết giờ!',
          };
        }

        return {
          timeLeft: prevState.timeLeft - 1,
        };
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
  };

  handleStart = () => {
    if (this.state.timeLeft > 0) {
      this.setState({
        isRunning: true,
        message: '',
      });
    }
  };

  handlePause = () => {
    this.setState({
      isRunning: false,
    });
  };

  handleReset = () => {
    this.setState({
      timeLeft: POMODORO_TIME,
      isRunning: false,
      message: '',
    });
  };

  formatTime = () => {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  render() {
    return (
      <section className="timer">
        <h1>Pomodoro Timer</h1>
        <p className="time">{this.formatTime()}</p>

        {this.state.message && <p className="message">{this.state.message}</p>}

        <div className="actions">
          <button onClick={this.handleStart} disabled={this.state.isRunning}>
            Bắt đầu
          </button>
          <button onClick={this.handlePause} disabled={!this.state.isRunning}>
            Tạm dừng
          </button>
          <button onClick={this.handleReset}>Đặt lại</button>
        </div>
      </section>
    );
  }
}

export default PomodoroTimer;
