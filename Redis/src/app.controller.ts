import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { Ctx, EventPattern, MessagePattern, Payload, RedisContext } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    private logger = new Logger(AppController.name)

    @EventPattern('Redis_Event')
    async getEventPattern(@Payload() data: unknown, @Ctx() context: RedisContext) {
        this.logger.verbose('EventPattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        console.log(context, 'context')
        this.logger.debug('success')
        return res
    }

    @MessagePattern('Redis_Message')
    async getMessagePattern(@Payload() data: unknown, @Ctx() context: RedisContext) {
        this.logger.verbose('MessagePattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        console.log(context, 'context')
        this.logger.debug('success')
        return res
    }
}
