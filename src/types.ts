type ConnectionConfig = {
    hostname: string,
    port: number
};

type ConnectionType = 'PRODUCER' | 'CONSUMER';

type INotification = {
    title: string;
    description: string;
};

export {
    ConnectionConfig,
    ConnectionType,
    INotification
};
