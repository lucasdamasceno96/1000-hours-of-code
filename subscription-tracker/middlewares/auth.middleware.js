import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const authorize = async (req, res, next) => {
    // Check if the request has an authorization header
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }


        // Verify the token
        const decoded = await jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId)
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
        // Attach the user to the request object


    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

export default authorize;