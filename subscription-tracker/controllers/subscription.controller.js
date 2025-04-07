import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        console.log('🟢 Criando assinatura...', req.body);

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id, // associando ao usuário logado
        });

        console.log('✅ Assinatura criada com sucesso:', subscription);

        res.status(201).json({
            status: 'success',
            data: { subscription },
        });
    } catch (e) {
        console.log('🔴 Erro ao criar assinatura:', e); // ✅ correto agora
        next(e);
    }
};

export const getAllSubscriptionsByUser = async (req, res, next) => {
    try {
        console.log('🟢 Buscando todas as assinaturas...')
        if (req.user.id !== req.params.id) {
            return res.status(403).json({ message: 'Access denied, you are not the owner' });
        }

        const subscriptions = await Subscription.find({ user: req.params.id });

        res.status(200).json({
            status: 'success',
            data: { subscriptions },
        });
    } catch (e) {
        console.log('🔴 Erro ao buscar assinaturas:', e);
        next(e);
    }
}

export const getAllSubscriptions = async (req, res, next) => {
    try {
        console.log('🟢 Buscando todas as assinaturas...');

        const subscriptions = await Subscription.find();

        res.status(200).json({
            status: 'success',
            data: { subscriptions },
        });
    } catch (e) {
        console.log('🔴 Erro ao buscar assinaturas:', e);
        next(e);
    }
}

export const getSubscriptionById = async (req, res, next) => {
    try {
        console.log('🟢 Buscando assinatura por ID...');

        const subscription = await Subscription.findById(req.params.id);

        if (!subscription) {
            return res.status(404).json({
                status: 'fail',
                message: 'Subscription not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: { subscription },
        });
    } catch (e) {
        console.log('🔴 Erro ao buscar assinatura:', e);
        next(e);
    }

}


export const cancelSubscription = async (req, res, next) => {
    try {
        console.log('🟢 Cancelando assinatura...');

        const subscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            { status: 'canceled' },
            { new: true }
        );

        if (!subscription) {
            return res.status(404).json({
                status: 'fail',
                message: 'Subscription not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: { subscription },
            message: 'Subscription canceled successfully',
        });
    } catch (e) {
        console.log('🔴 Erro ao cancelar assinatura:', e);
        next(e);
    }
}

export const updateSubscription = async (req, res, next) => {
    try {
        console.log('🟢 Atualizando assinatura...');

        const subscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!subscription) {
            return res.status(404).json({
                status: 'fail',
                message: 'Subscription not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: { subscription },
            message: 'Subscription updated successfully',
        });
    } catch (e) {
        console.log('🔴 Erro ao atualizar assinatura:', e);
        next(e);
    }
}

export const deleteSubscription = async (req, res, next) => {
    try {
        console.log('🟢 Deletando assinatura...');

        const subscription = await Subscription.findByIdAndDelete(req.params.id);

        if (!subscription) {
            return res.status(404).json({
                status: 'fail',
                message: 'Subscription not found',
            });
        }

        res.status(204).json({
            status: 'success',
            data: null,
            message: 'Subscription deleted successfully',
        });
    } catch (e) {
        console.log('🔴 Erro ao deletar assinatura:', e);
        next(e);
    }
}

export const getUpcomingRenewals = async (req, res, next) => {
    try {
        console.log('🟢 Buscando renovações futuras...');

        const subscriptions = await Subscription.find({
            user: req.params.id,
            status: 'active',
            nextRenewalDate: { $gte: new Date() },
        });

        res.status(200).json({
            status: 'success',
            data: { subscriptions },
        });
    } catch (e) {
        console.log('🔴 Erro ao buscar renovações futuras:', e);
        next(e);
    }
}