import { Module } from '@nestjs/common'
import { AmqpController } from './amqp.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'RABBITMQ_TOKEN',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5678'],
                    queue: 'amqp_queue',
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
    ],
    controllers: [AmqpController],
})
export class AmqpModule {}
