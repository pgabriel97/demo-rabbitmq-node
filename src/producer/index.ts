import { NotificationProducer } from './NotificationProducer';
import { INotification } from '../types';
import { RabbitMQConfig } from '../config';

const producer: NotificationProducer = new NotificationProducer(RabbitMQConfig);
const sendNotification = async (message: INotification) => {
    await producer.connect();
    await producer.sendToQueue(message);
};

export {
    sendNotification
};
