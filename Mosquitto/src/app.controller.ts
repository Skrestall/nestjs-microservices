import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { Ctx, EventPattern, MessagePattern, MqttContext, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    private logger = new Logger(AppController.name)

    @EventPattern('MQTT_Event')
    async getEventPattern(@Payload() data: unknown, @Ctx() context: MqttContext) {
        this.logger.verbose('EventPattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        console.log(context, 'context')
        this.logger.debug('success')
        return res
    }

    @MessagePattern('MQTT_Message')
    async getMessagePattern(@Payload() data: unknown, @Ctx() context: MqttContext) {
        this.logger.verbose('MessagePattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        console.log(context, 'context')
        this.logger.debug('success')
        return res
    }
}
