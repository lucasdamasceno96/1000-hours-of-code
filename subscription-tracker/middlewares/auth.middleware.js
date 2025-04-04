import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const authorize = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            console.log('🔴 Nenhum token fornecido!');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        console.log(`🟢 Token recebido: ${token}`);

        // Verifica o token
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(`🟢 Token decodificado:`, decoded);

        // Busca o usuário no banco
        const user = await User.findById(decoded.userID);
        if (!user) {
            console.log('🔴 Usuário não encontrado!');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log('🔴 Erro na autenticação:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default authorize;