import { useState } from "react";
import { Board } from "./components/Board";
import { Form } from "./components/Form";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [start, setStart] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

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
        <button className={className} onClick={() => setCurrentMove(move)}>
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
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
              moves={moves}
            />
          </>
        ) : (
          <Form setStart={setStart} />
        )}
      </div>
    </div>
  );
};

export default Game;
