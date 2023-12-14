import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('redis')
export class RedisController {
    constructor(@Inject('REDIS_TOKEN') private readonly redisMicroservice: ClientProxy) {}

    @Get('message')
    getMessageRedis() {
        return this.redisMicroservice.send('Redis_Message', {
            age: 57,
            name: 'Message',
            job: 'Jenkins',
            type: 'Redis',
        })
    }

    @Get('event')
    getEventRedis() {
        return this.redisMicroservice.emit('Redis_Event', {
            age: 87,
            name: 'Event',
            job: 'Jenkins',
            type: 'Redis',
        })
    }
}
