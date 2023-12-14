import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    async getData(data: unknown) {
        return data
    }
}
