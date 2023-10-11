import { Module } from '@nestjs/common';
import { StreetService } from './street.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreetController } from './street.controller';
import { Street } from './entities/street.entity.js'

@Module({
  imports: [TypeOrmModule.forFeature([Street])],
  controllers: [StreetController],
  providers: [StreetService],
})
export class StreetModule {}
