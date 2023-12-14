import { Module } from '@nestjs/common'
import { AmqpModule } from './amqp/amqp.module'
import { TcpModule } from './tcp/tcp.module'
import { GrpcModule } from './grpc/grpc.module'
import { RedisModule } from './redis/redis.module';
import { NatsModule } from './nats/nats.module';
import { MosquittoModule } from './mosquitto/mosquitto.module';

@Module({
    imports: [AmqpModule, TcpModule, GrpcModule, RedisModule, NatsModule, MosquittoModule],
})
export class AppModule {}
