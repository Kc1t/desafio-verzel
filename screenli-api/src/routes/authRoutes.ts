import { Router } from 'express';
import { login, register } from '../controllers/authController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

export default router;
