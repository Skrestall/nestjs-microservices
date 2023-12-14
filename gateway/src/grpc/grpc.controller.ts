import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common'
import { ClientGrpc } from '@nestjs/microservices'

@Controller('grpc')
export class GrpcController implements OnModuleInit {
    constructor(@Inject('GRPC_TOKEN') private grpcMicroservice: ClientGrpc) {}

    private grpcService

    onModuleInit() {
        this.grpcService = this.grpcMicroservice.getService('GrpcMicroservice')
    }

    @Get()
    getGrpc() {
        return this.grpcService.GetGrpcMethod({
            age: 17,
            name: 'grpc',
            job: 'cool',
            type: 'grpc',
        })
    }
}
