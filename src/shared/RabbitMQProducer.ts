import { RabbitMQConnection } from './RabbitMQConnection';
import { ConnectionType } from '../types';

/**
 * Generic RabbitMQ producer.
 */
abstract class RabbitMQProducer extends RabbitMQConnection {

    /**
     * Sends a message to be consumed.
     *
     * @param message Message to be sent.
     */
    async sendToQueue(message: any) {
        try {
            /* It doesn't make sense to send without a connection. Try to connect first (or throw an error). */
            if (!this.channel) {
                await this.connect();
            }

            console.log(`[${this.type}] Sending message...`);
            this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(message)));
        } catch (error) {
            throw error;
        }
    }

    type: ConnectionType = 'PRODUCER';
}

export {
    RabbitMQProducer
};
