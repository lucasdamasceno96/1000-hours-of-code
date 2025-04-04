import { Router } from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', authorize, getAllUsers);
userRouter.get('/:id', authorize, getUserById);
userRouter.post('/', authorize, createUser);
userRouter.delete('/:id', authorize, deleteUserById);

export default userRouter;
