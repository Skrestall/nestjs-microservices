import { Module } from '@nestjs/common'
import { GrpcController } from './grpc.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'GRPC_TOKEN',
                transport: Transport.GRPC,
                options: {
                    url: 'localhost:4000',
                    package: 'grpc',
                    protoPath: join(__dirname, 'proto/grpc.proto'),
                },
            },
        ]),
    ],
    controllers: [GrpcController],
})
export class GrpcModule {}
