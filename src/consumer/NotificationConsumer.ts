import { RabbitMQConsumer } from '../shared/RabbitMQConsumer';
import { QueueName } from '../constants';

/**
 * RabbitMQ consumer that receives notification messages.
 */
class NotificationConsumer extends RabbitMQConsumer {
    queue = QueueName.NOTIFICATION;
}

export {
    NotificationConsumer
};
