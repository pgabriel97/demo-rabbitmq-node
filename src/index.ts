import { sendNotification } from './producer';
import { consumeNotifications } from './consumer';

const produceAndConsume = async () => {
    await sendNotification({
        title: 'New message',
        description: 'Please, check your new friend request.'
    });
    await consumeNotifications();
};

produceAndConsume().then();
