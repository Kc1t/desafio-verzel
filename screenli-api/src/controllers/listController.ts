import { Request, Response } from 'express';
import { createList, getUserLists, getListById, addMovieToList, deleteList, removeMovieFromList } from '../services/listService';

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const createListController = async (req: AuthenticatedRequest, res: Response) => {
  const { name, description } = req.body;
  const userId = req.userId;

  if (!userId) return res.status(401).json({ message: 'User not authenticated' });

  try {
    const list = await createList(userId, name, description);
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getUserListsController = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userId;

  if (!userId) return res.status(401).json({ message: 'User not authenticated' });

  try {
    const lists = await getUserLists(userId);
    res.status(200).json(lists);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getListByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const list = await getListById(id);
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const addMovieToListController = async (req: AuthenticatedRequest, res: Response) => {
  const { listId, movieId, title, poster_path } = req.body;
  const userId = req.userId;

  if (!userId) return res.status(401).json({ message: 'User not authenticated' });

  try {
    const updatedList = await addMovieToList(listId, movieId, title, poster_path);
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteListController = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.userId;

  if (!userId) return res.status(401).json({ message: 'User not authenticated' });

  try {
    await deleteList(id, userId);
    res.status(200).json({ message: 'List deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const removeMovieFromListController = async (req: AuthenticatedRequest, res: Response) => {
  const { listId, movieId } = req.body;
  const userId = req.userId;

  if (!userId) return res.status(401).json({ message: 'User not authenticated' });

  try {
    const updatedList = await removeMovieFromList(listId, movieId);
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
