import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('mosquitto')
export class MosquittoController {
    constructor(@Inject('MQTT_TOKEN') private readonly natsMicroservice: ClientProxy) {}

    @Get('event')
    getEventNATS() {
        return this.natsMicroservice.emit('MQTT_Event', {
            age: 36,
            name: 'Event',
            job: 'Jenkins',
            type: 'MQTT',
        })
    }

    @Get('message')
    getMessageNATS() {
        return this.natsMicroservice.send('MQTT_Message', {
            age: 51,
            name: 'Message',
            job: 'Jenkins',
            type: 'MQTT',
        })
    }
}
