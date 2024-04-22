import { NotificationConsumer } from './NotificationConsumer';
import { RabbitMQConfig } from '../config';

const consumer: NotificationConsumer = new NotificationConsumer(RabbitMQConfig);

const consumeNotifications = async () => {
    await consumer.connect();
    await consumer.consume();
};

export {
    consumeNotifications
};
