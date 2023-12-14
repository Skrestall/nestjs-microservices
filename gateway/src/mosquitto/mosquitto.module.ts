import { Module } from '@nestjs/common'
import { MosquittoController } from './mosquitto.controller'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MQTT_TOKEN',
                transport: Transport.MQTT,
                options: {
                    url: 'mqtt://localhost:1883',
                },
            },
        ]),
    ],
    controllers: [MosquittoController],
})
export class MosquittoModule {}
