import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from 'typeorm';
import { Company } from '../../company/entity/company.entity';

@Entity({ name: 'locations' })
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name',type: 'text' })
    name: string;

    @Column({name:'zip_code', type: 'text' })
    cep: string;

    @Column({ name:'bulevar',type: 'text' })
    bulevar: string;

    @Column({name:'number', type: 'text' })
    number: string;

    @Column({name:'district', type: 'text' })
    district: string;

    @Column({ name:'city',type: 'text' })
    city: string;

    @Column({ name:'state',type: 'text'})
    state: string;

    @ManyToOne(() => Company, (company) => company.locais, { nullable: false })
    company: Company;
}