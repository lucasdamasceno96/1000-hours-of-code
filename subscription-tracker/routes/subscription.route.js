import { Router } from 'express';
import { cancelSubscription, createSubscription, getAllSubscriptions, getAllSubscriptionsByUser, updateSubscription, deleteSubscription, getSubscriptionById, getUpcomingRenewals } from '../controllers/subscription.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';
import { get } from 'mongoose';

const subscriptionRouter = Router();

subscriptionRouter.get('/', authorize, getAllSubscriptions);

subscriptionRouter.get('/:id', authorize, getSubscriptionById);

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', authorize, updateSubscription);

subscriptionRouter.delete('/:id', authorize, deleteSubscription)

subscriptionRouter.get('/user/:id', authorize, getAllSubscriptionsByUser);

subscriptionRouter.put('/:id/cancel', authorize, cancelSubscription);

subscriptionRouter.get('/:id/upcoming-renewals', authorize, getUpcomingRenewals)



export default subscriptionRouter;