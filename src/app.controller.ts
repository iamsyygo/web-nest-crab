import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // return new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return this.appService.getHello();
  }
}
