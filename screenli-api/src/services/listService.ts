import List from '../models/listModel';

export const createList = async (userId: string, name: string, description: string) => {
  try {
    const list = new List({ user: userId, name, description });
    return await list.save();
  } catch (error) {
    console.error('Error creating list:', error);
    throw new Error('Error creating list');
  }
};

export const getUserLists = async (userId: string) => {
  try {
    return await List.find({ user: userId });
  } catch (error) {
    console.error('Error fetching user lists:', error);
    throw new Error('Error fetching user lists');
  }
};

export const getListById = async (listId: string) => {
  try {
    return await List.findById(listId);
  } catch (error) {
    console.error('Error fetching list:', error);
    throw new Error('Error fetching list');
  }
};

export const addMovieToList = async (
  listId: string,
  movieId: number,
  title: string,
  poster_path: string
) => {
  try {
    return await List.findByIdAndUpdate(
      listId,
      { $addToSet: { movies: { id: movieId, title, poster_path } } },
      { new: true }
    );
  } catch (error) {
    console.error('Error adding movie to list:', error);
    throw new Error('Error adding movie to list');
  }
};

export const deleteList = async (listId: string, userId: string) => {
  try {
    const list = await List.findOneAndDelete({ _id: listId, user: userId });
    if (!list) {
      throw new Error('List not found or user not authorized');
    }
  } catch (error) {
    console.error('Error deleting list:', error);
    throw new Error('Error deleting list');
  }
};

export const removeMovieFromList = async (listId: string, movieId: number) => {
  try {
    return await List.findByIdAndUpdate(
      listId,
      { $pull: { movies: { id: movieId } } },
      { new: true }
    );
  } catch (error) {
    console.error('Error removing movie from list:', error);
    throw new Error('Error removing movie from list');
  }
};

