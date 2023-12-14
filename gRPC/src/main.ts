import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:4000',
            package: 'grpc',
            protoPath: join(__dirname, 'proto/grpc.proto'),
        },
    })
    await app.listen()
}

bootstrap()
