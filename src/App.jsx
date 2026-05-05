import { useState, useEffect } from 'react';
import { calculateWinner } from './utils/calculateWinner';
import Scoreboard from './components/Scoreboard';
import Square from './components/Square';
import './App.css';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });

  const winInfo = calculateWinner(squares);
  const winner = winInfo ? winInfo.player : null;
  const winningLine = winInfo ? winInfo.line : [];
  const isDraw = !winner && squares.every((square) => square !== null);

  useEffect(() => {
    if (winner) {
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (isDraw) {
      setScores(prev => ({ ...prev, Draws: prev.Draws + 1 }));
    }
  }, [winner, isDraw]);

  let status;
  if (winner) {
    status = `Winner: ${winner} 👑`;
  } else if (isDraw) {
    status = 'Result: Draw 🤝';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    if (winner === 'X') setXIsNext(false);
    if (winner === 'O') setXIsNext(true);
  };

  return (
    <div className="game-container">
      <Scoreboard scores={scores} />

      <div className="status">{status}</div>
      
      <div className="board-grid">
        {squares.map((square, i) => (
          <Square 
            key={i}
            value={square}
            onClick={() => handleClick(i)}
            isWinningSquare={winner && winningLine.includes(i)}
            isDimmed={winner && !winningLine.includes(i)}
          />
        ))}
      </div>
      
      <button id="reset" onClick={handleReset}>
        {winner || isDraw ? "Play Next Round" : "Restart Game"}
      </button>
    </div>
  );
}