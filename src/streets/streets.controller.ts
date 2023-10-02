import {Controller, Get} from '@nestjs/common';

@Controller('streets')
export class StreetsController {
    nodes = ['12', '341'];

    @Get()
    getAll(): {} [] {
        return this.nodes;
    }
}
