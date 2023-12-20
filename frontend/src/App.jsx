import { useState, useEffect } from "react";
import { Board } from "./components/Board";
import { Form } from "./components/Form";
import { apiGetPlayers } from "./api/playerServer";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [start, setStart] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  useEffect(() => {
    fetchPessoas();
  }, [load]);

  const fetchPessoas = async () => {
    const result = await apiGetPlayers();
    setData(result);
  };

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const testStart = () => {
    history.map((squares, move) => {
      if (move > 0) {
      }
    });
  };

  const moves = history.map((squares, move) => {
    if (!move > 0) {
      return (
        <button
          className="bg-green-500 text-white px-2 py-1 rounded-[3px] shadow-md hover:shadow-xl mb-6"
          onClick={() => setCurrentMove(move)}
        >
          Começar
        </button>
      );
    }
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
              data={data}
              player1={player1}
              player2={player2}
              setLoad={setLoad}
              load={load}
            />
          </>
        ) : (
          <Form
            setStart={setStart}
            setLoad={setLoad}
            load={load}
            player1={player1}
            setPlayer1={setPlayer1}
            player2={player2}
            setPlayer2={setPlayer2}
          />
        )}
      </div>
    </div>
  );
};

export default Game;
