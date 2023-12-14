import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('amqp')
export class AmqpController {
    constructor(@Inject('RABBITMQ_TOKEN') private readonly rabbitMQMicroservice: ClientProxy) {}

    @Get('event')
    getEventRabbitMQ() {
        return this.rabbitMQMicroservice.emit('RabbitMQ_Event', {
            age: 77,
            name: 'Event',
            job: 'Jenkins',
            type: 'amqp',
        })
    }

    @Get('message')
    getMessageRabbitMQ() {
        return this.rabbitMQMicroservice.send('RabbitMQ_Message', {
            age: 16,
            name: 'Message',
            job: 'Jenkins',
            type: 'amqp',
        })
    }
}
