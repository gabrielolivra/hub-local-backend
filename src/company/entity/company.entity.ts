import { Location } from 'src/locations/entity/locations.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  website: string;

  @Column({ type: 'text', unique: true })
  cnpj: string;

  @ManyToOne(() => Users, (user) => user.companies, { nullable: false })
  user: Users;

  @OneToMany(() => Location, (local) => local.company)
  locais: Location[];
}
