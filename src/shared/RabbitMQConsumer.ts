import { RabbitMQConnection } from './RabbitMQConnection';
import { ConnectionType } from '../types';

/**
 * Generic RabbitMQ consumer.
 */
abstract class RabbitMQConsumer extends RabbitMQConnection {

    /**
     * Consumes the messages received.
     */
    async consume(): Promise<void> {
        /* In case consuming needs to be used before being initialized, do it here. */
        await this.channel.assertQueue(this.queue, { durable: true });

        /* Consume the values from this queue and handle the message accordingly. */
        await this.channel.consume(
            this.queue,
            (message) => {
                if (!message) {
                    return console.error(`[${this.type}] Invalid incoming message!`);
                }

                /* It's necessary to first convert the message to string and only then parse it. */
                try {
                    const parsedMessage = JSON.parse(message?.content?.toString());
                    console.log(`[${this.type}] Received message: `, parsedMessage);
                } catch (error) {
                    throw error;
                }

                /* Acknowledge result, so the producer stop retrying the sending. */
                this.channel.ack(message);
            },
            { noAck: false }
        );
    }

    type: ConnectionType = 'CONSUMER';
}

export {
    RabbitMQConsumer
};
