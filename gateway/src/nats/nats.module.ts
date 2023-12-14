import { Module } from '@nestjs/common'
import { NatsController } from './nats.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NATS_TOKEN',
                transport: Transport.NATS,
                options: {
                    servers: ['nats://localhost:4222'],
                    queue: 'nats_queue',
                },
            },
        ]),
    ],
    controllers: [NatsController],
})
export class NatsModule {}
