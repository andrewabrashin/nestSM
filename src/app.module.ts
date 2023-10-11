import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {StreetModule} from './street/street.module';
import {Street} from "./street/entities/street.entity";
import {DataSource} from 'typeorm'

console.log('init root module', process.env.HOST);

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'admin',
            password: 'admin',
            database: 'nest_db',
            entities: [Street],
        }),
        StreetModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor (private dataSource: DataSource) {}
}
