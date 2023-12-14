const URL_API = "http://localhost:8000/api";

export const apiGetPlayers = async () => {
  try {
    const response = await fetch(`${URL_API}/player`);
    if (!response.ok) {
      throw new Error("Falha na requisição!");
    }
    return await response.json();
  } catch (err) {
    throw new Error("Erro ao carregar os dados!");
  }
};

export const apiAddPlayer = async (player1, player2) => {
  try {
    const response = await fetch(`${URL_API}/player/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player1, player2 }),
    });

    if (!response.ok) {
      throw new Error("Houve erro na adição do usuário");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const apiUpdatePlayer = async (player) => {
  try {
    const response = await fetch(`${URL_API}/player/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player }),
    });

    if (!response.ok) {
      throw new Error("Houve erro na adição do usuário");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
