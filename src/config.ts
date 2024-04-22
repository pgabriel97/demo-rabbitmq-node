import dotenv from 'dotenv';
import { ConnectionConfig } from './types';

/* Configure environemnt variables to consider the .env file. */
dotenv.config();

/*
 * Create a general configuration for connections.
 * In reality, it may be different between various workers.
 */
const RabbitMQConfig: ConnectionConfig = {
    hostname: process.env.MQ_HOSTNAME || 'localhost',
    port: process.env.MQ_PORT ? Number.parseInt(process.env.MQ_PORT, 10) : 5672
};

export {
    RabbitMQConfig
};
