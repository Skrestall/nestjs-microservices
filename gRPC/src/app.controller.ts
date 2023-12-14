import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { GrpcMethod } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    private logger = new Logger(AppController.name)

    @GrpcMethod('GrpcMicroservice', 'GetGrpcMethod')
    async getGrpc(data: unknown): Promise<unknown> {
        this.logger.verbose('EventPattern')
        const res = await this.appService.getData(data)
        console.log(data, 'data')
        this.logger.debug('success')
        return res
    }
}
