import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Street {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    type: string;
}
