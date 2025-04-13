// Importing the required modules
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

import Subscription from '../models/subscription.model.js';
import dayjs from 'dayjs';

const REMINDERS = [7, 3, 1]; // Days before the renewal date to send reminders
const REMINDER_MESSAGE = 'Your subscription is about to expire. Please renew it.';

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') {
        return context.error('Subscription not found or subscription is not active');
    }

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log('Subscription is already expired');
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `reminder-${daysBefore}`, reminderDate);
            await triggerReminder(context, `reminder-${daysBefore}`);
        }
    }

});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('getSubscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}

const sleepUntilReminder = async (context, label, reminderDate) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());

}

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);

    })
}
