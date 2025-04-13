import { Client } from '@upstash/workflows';
import { QSTASH_TOKEN, QSTASH_URL } from './env';

export const workflowCLient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
});