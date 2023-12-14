import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('tcp')
export class TcpController {
    constructor(@Inject('TCP_TOKEN') private readonly tcpMicroservice: ClientProxy) {}

    @Get('message')
    getMessageTCP() {
        return this.tcpMicroservice.send('TCP_Message', {
            age: 57,
            name: 'Message',
            job: 'Jenkins',
            type: 'tcp',
        })
    }

    @Get('event')
    getEventTCP() {
        return this.tcpMicroservice.emit('TCP_Event', {
            age: 87,
            name: 'Event',
            job: 'Jenkins',
            type: 'tcp',
        })
    }
}
