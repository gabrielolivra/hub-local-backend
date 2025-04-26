import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Company } from '../../company/entity/company.entity';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({
    name: 'email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @OneToMany(() => Company, (company) => company.user)
  companies: Company[];
}
