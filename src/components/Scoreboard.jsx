import React from 'react';

export default function Scoreboard({ scores }) {
  return (
    <div className="scoreboard">
      <div className="score-box x-score">
        <span className="label">Player X</span>
        <span className="points">{scores.X}</span>
      </div>
      <div className="score-box draws">
        <span className="label">Draws</span>
        <span className="points">{scores.Draws}</span>
      </div>
      <div className="score-box o-score">
        <span className="label">Player O</span>
        <span className="points">{scores.O}</span>
      </div>
    </div>
  );
}