import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
    constructor(private readonly appService: AppService) {}

    // localhost:8000/cats/hello
    @Get('hello/:id/:name')
    getHello(
        @Req() req: Request,
        @Body() body,
        @Param() param: { ids: string; name: string },
    ): string {
        console.log(
            '🚀 ~ file: app.controller.ts:12 ~ AppController ~ getHello ~ req',
            req,
        );
        return this.appService.getHello();
    }
}
