import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    private logger = new Logger(AppController.name)

    @EventPattern('TCP_Event')
    async getEventPattern(@Payload() data: unknown) {
        this.logger.verbose('EventPattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        this.logger.debug('success')
        return res
    }

    @MessagePattern('TCP_Message')
    async getMessagePattern(@Payload() data: unknown) {
        this.logger.verbose('MessagePattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        this.logger.debug('success')
        return res
    }
}
