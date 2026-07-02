import { Component } from 'react';

class ScoreBoard extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.score !== this.props.score;
  }

  render() {
    console.log('ScoreBoard render');

    return (
      <div className="score-board">
        <p>Điểm số</p>
        <strong>{this.props.score}</strong>
      </div>
    );
  }
}

export default ScoreBoard;
