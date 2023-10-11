import {Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/register')
  register (@Body() data: Object) {
    return this.appService.register(data);
  }

  @Post('/login')
  login (@Body() data: Object) {
    return this.appService.login(data);

  }
}
