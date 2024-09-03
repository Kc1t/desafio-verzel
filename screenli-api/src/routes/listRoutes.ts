import express from 'express';
import {
  createListController,
  getUserListsController,
  getListByIdController,
  addMovieToListController,
  deleteListController, 
  removeMovieFromListController
} from '../controllers/listController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/lists', authenticateToken, createListController);
router.get('/lists', authenticateToken, getUserListsController);
router.get('/lists/:id', getListByIdController);
router.post('/lists/add-movie', authenticateToken, addMovieToListController);
router.delete('/lists/:id', authenticateToken, deleteListController);
router.post('/lists/remove-movie', authenticateToken, removeMovieFromListController);


export default router;