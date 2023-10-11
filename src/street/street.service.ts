import {Injectable} from '@nestjs/common';
import {CreateStreetDto} from './dto/create-street.dto';
import {UpdateStreetDto} from './dto/update-street.dto';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Street} from './entities/street.entity'

@Injectable()
export class StreetService {
    constructor(
        @InjectRepository(Street)
        private repository: Repository<Street>
    ) {
    }

    create(createStreetDto: CreateStreetDto) {
        return this.repository.save(createStreetDto);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOneBy({ id });
    }

    update(id: number, updateStreetDto: UpdateStreetDto) {
        return this.repository.save({ ...updateStreetDto, id});
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
