import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', authorize, getUserById);

userRouter.post('/', (req, res) => { res.send({ title: 'CREATE new user' }); });

userRouter.put('/:id', (req, res) => { res.send({ title: 'UPDATE user by id' }); });

userRouter.delete('/:id', (req, res) => { res.send({ title: 'DELETE user by id' }); });

export default userRouter;
