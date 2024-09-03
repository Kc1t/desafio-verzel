import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/lists`;

// Função para criar uma lista
export const createList = async (name: string, description: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    API_URL,
    { name, description },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Função para obter todas as listas
export const getLists = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Função para obter detalhes de uma lista específica
export const getListDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Função para adicionar um filme a uma lista
export const addMovieToList = async (listId: string, movieId: number) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/add-movie`,
    { listId, movieId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Função para remover um filme de uma lista
export const removeMovieFromList = async (listId: string, movieId: number) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/remove-movie`,
    { listId, movieId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Função para apagar uma lista
export const deleteList = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
