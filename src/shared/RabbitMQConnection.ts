import client, { Connection, Channel } from 'amqplib';
import { ConnectionConfig, ConnectionType } from '../types';

/**
 * Generic connection to a RabbitMQ server.
 */
abstract class RabbitMQConnection {

    constructor(config: ConnectionConfig) {
        this.connectionUrl = `amqp://${config.hostname}:${config.port}`
    }

    /**
     * Creates a connection to the RabbitMQ server.
     */
    async connect(): Promise<void> {
        /* Do not try to create a new connection if one is already started. */
        if (this.connected && this.channel) {
            return;
        }

        try {
            console.log(`[${this.type}] Connecting to RabbitMQ server...`);
            this.connection = await client.connect(this.connectionUrl);
            console.log(`[${this.type}] Connection to RabbitMQ is ready.`);

            this.channel = await this.connection.createChannel();
            console.log(`[${this.type}] Channel created successfully.`);

            this.connected = true;
        } catch (error) {
            throw error;
        }
    }

    /**
     * The channel created during the connection to RabbitMQ.
     */
    channel!: Channel;

    /**
     * True, if a connection is already set. False, otherwise.
     *
     * @private
     */
    private connected!: Boolean;

    /**
     * Unique instance of the connection to RabbitMQ.
     */
    connection!: Connection;

    /**
     * Connection URL to the RabbitMQ server.
     */
    connectionUrl: string;

    /**
     * Friendly name to identify the queue.
     * Should have a correspondent between producer and consumer.
     */
    abstract queue: string;

    /**
     * The type of connection: producer or consumer.
     */
    abstract type: ConnectionType;
}

export {
    RabbitMQConnection
};
