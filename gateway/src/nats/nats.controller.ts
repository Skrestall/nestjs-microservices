import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('nats')
export class NatsController {
    constructor(@Inject('NATS_TOKEN') private readonly natsMicroservice: ClientProxy) {}

    @Get('event')
    getEventNATS() {
        return this.natsMicroservice.emit('NATS_Event', {
            age: 46,
            name: 'Event',
            job: 'Jenkins',
            type: 'NATS',
        })
    }

    @Get('message')
    getMessageNATS() {
        return this.natsMicroservice.send('NATS_Message', {
            age: 22,
            name: 'Message',
            job: 'Jenkins',
            type: 'NATS',
        })
    }
}
