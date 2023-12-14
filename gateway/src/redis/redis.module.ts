import { Module } from '@nestjs/common'
import { RedisController } from './redis.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'REDIS_TOKEN',
                transport: Transport.REDIS,
                options: {
                    host: 'localhost',
                    port: 6379,
                },
            },
        ]),
    ],
    controllers: [RedisController],
})
export class RedisModule {}
