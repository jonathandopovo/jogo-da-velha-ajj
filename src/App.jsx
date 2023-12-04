import { useState } from "react";

function Square({ value, onSquareClick, className }) {
  return (
    <button
      className={`${className} text-gray-500 text-xl font-light`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
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
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `O Vencedor foi "${winner}"`;
  } else {
    status = `Vez de "${xIsNext ? "X" : "O"}"`;
  }

  return (
    <>
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
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [start, setStart] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    let className;
    if (move > 0) {
      description = `Ir para a ${move}ª jogada`;
      className = "hover:text-blue-500";
    } else {
      description = "Começar";
      className =
        "bg-green-500 text-white px-2 py-1 rounded-[3px] shadow-md hover:shadow-xl mb-6";
    }
    return (
      <li key={move}>
        <button className={className} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex border-[1px] rounded-lg shadow-xl p-4 border-gray-200 h-96 w-[500px] gap-[20px]">
        {start ? (
          <>
            <div>
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
              />
            </div>
            <div className="game-info overflow-auto">
              <ul className="w-[200px] h-full text-center">{moves}</ul>
            </div>
          </>
        ) : (
          <div className="m-auto space-y-4">
            <div>
              <label htmlFor="player1" className="text-sm">Jogador 1:</label>
              <input type="text" name="player1" className="border rounded-md py-1 px-2 w-full"/>
            </div>
            <div>
              <label htmlFor="player2" className="text-sm">Jogador 2:</label>
              <input type="text" name="player2" className="border rounded-md py-1 px-2 w-full"/>
            </div>
            <button className="bg-green-500 text-white px-2 w-full py-1 rounded-[3px] shadow-md hover:shadow-xl" onClick={()=>{setStart(true)}}>Cadastrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
