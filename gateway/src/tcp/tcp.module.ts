import { Module } from '@nestjs/common'
import { TcpController } from './tcp.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'TCP_TOKEN',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    port: 7744,
                },
            },
        ]),
    ],
    controllers: [TcpController],
})
export class TcpModule {}
