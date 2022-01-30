import { Controller, Get } from '@nestjs/common';


@Controller('user')
export class UserController {
    @Get()
    async all(): Promise<string>{
        return 'this GET User'
    }
}
