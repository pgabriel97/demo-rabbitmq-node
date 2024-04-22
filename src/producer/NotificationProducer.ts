import { QueueName } from '../constants';
import { RabbitMQProducer } from '../shared/RabbitMQProducer';

/**
 * RabbitMQ producer that sends notification messages.
 */
class NotificationProducer extends RabbitMQProducer {
    queue: string = QueueName.NOTIFICATION;
}

export {
    NotificationProducer
};
