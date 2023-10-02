import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreetsController } from './streets/streets.controller';

@Module({
  imports: [],
  controllers: [AppController, StreetsController],
  providers: [AppService],
})
export class AppModule {}
