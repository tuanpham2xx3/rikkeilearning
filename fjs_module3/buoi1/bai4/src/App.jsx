import { Component } from 'react';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      tick: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        tick: prevState.tick + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  increaseScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  render() {
    return (
      <main className="page">
        <section className="box">
          <h1>Score Board</h1>
          <p>Component cha cập nhật mỗi giây: {this.state.tick}</p>

          <ScoreBoard score={this.state.score} />

          <button onClick={this.increaseScore}>Tăng điểm</button>
        </section>
      </main>
    );
  }
}

export default App;
