import Rank from "../Rank";
import { apiUpdatePlayer } from "../../api/playerServer";

export const Board = ({
  xIsNext,
  squares,
  onPlay,
  moves,
  data,
  player1,
  player2,
  load,
  setLoad,
}) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    let winnerName = winner == "X" ? player1 : player2;
    apiUpdatePlayer(winnerName);
    setLoad(!load);
    status = `${winnerName} venceu!`;
  } else {
    status = `Vez de ${xIsNext ? player1 : player2}`;
  }

  return (
    <>
      <div>
        <div className="text-2xl text-gray-600 text-center mb-8">{status}</div>
        <div>
          <Square
            className="border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
          />
          <Square
            className="border-l border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            className="border-l border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            className="border-t border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            className="border border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            className="border-y border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            className="border-t border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            className="border-l border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          />
          <Square
            className="border-l border-gray-300 mt-[-1px] ml-[-1px] w-20 h-20 float-left"
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </div>
      <div className="game-info overflow-auto w-[200px] h-full text-center">
        {moves}
        <Rank data={data} />
      </div>
    </>
  );
};

const Square = ({ value, onSquareClick, className }) => {
  return (
    <button
      className={`${className} text-gray-500 text-xl font-light`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
