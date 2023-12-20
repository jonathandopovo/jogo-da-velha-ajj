const Rank = ({ data }) => {
  return (
    <>
      <div>
        <div className="relative overflow-x-auto sm:rounded-lg shadow-sm">
          <table className="w-full text-sm text-left border border-gray-200/40">
            <thead className="text-xs text-black uppercase border-b border-gray-200/40">
              <tr>
                <th scope="col" className="p-1 border-r">
                  Jogador
                </th>
                <th scope="col" className="p-1">
                  Pontuação
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((player, index) => (
                <tr key={index}>
                  <td className="p-1 border-r ">{player.name}</td>
                  <td className="p-1">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Rank;
