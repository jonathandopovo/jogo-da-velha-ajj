import { apiAddPlayer } from "../../api/playerServer";

export const Form = ({
  setStart,
  setLoad,
  load,
  player1,
  setPlayer1,
  player2,
  setPlayer2,
}) => {
  const addPlayers = (e) => {
    e.preventDefault();
    addPlayer();
    setLoad(!load);
    setStart(true);
  };

  const addPlayer = () => {
    apiAddPlayer(player1, player2);
  };

  return (
    <>
      <form className="m-auto space-y-4" onSubmit={addPlayers}>
        <div>
          <label htmlFor="player1" className="text-sm">
            Jogador 1:
          </label>
          <input
            type="text"
            onChange={(e) => setPlayer1(e.target.value)}
            className="border rounded-md py-1 px-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="player2" className="text-sm">
            Jogador 2:
          </label>
          <input
            type="text"
            onChange={(e) => setPlayer2(e.target.value)}
            className="border rounded-md py-1 px-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-2 w-full py-1 rounded-[3px] shadow-md hover:shadow-xl"
        >
          Cadastrar
        </button>
      </form>
    </>
  );
};
