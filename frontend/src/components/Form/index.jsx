export const Form = ({setStart}) => {
  return (
    <>
      <div className="m-auto space-y-4">
        <div>
          <label htmlFor="player1" className="text-sm">
            Jogador 1:
          </label>
          <input
            type="text"
            name="player1"
            className="border rounded-md py-1 px-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="player2" className="text-sm">
            Jogador 2:
          </label>
          <input
            type="text"
            name="player2"
            className="border rounded-md py-1 px-2 w-full"
          />
        </div>
        <button
          className="bg-green-500 text-white px-2 w-full py-1 rounded-[3px] shadow-md hover:shadow-xl"
          onClick={() => {
            setStart(true);
          }}
        >
          Cadastrar
        </button>
      </div>
    </>
  );
};
