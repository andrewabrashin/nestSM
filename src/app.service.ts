import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    login(data: Object): string {
        console.log('login', data);
        return '1212';
    }
    StreetsController
    register(data: Object): string {
        return '2';
    }
}
