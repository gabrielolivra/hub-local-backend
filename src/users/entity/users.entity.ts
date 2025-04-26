import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'users'})
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name:'firstName'})
  firstName: string;

  @Column({name:'lastName'})
  lastName: string;

  @Column({name:'username'})
  username: string;
  
  @Column({
    name:'email',
    unique: true 
     })
  email: string;

  @Column({name:'password'})
  password: string;

  @Column({name:'isActive', default: true})
  isActive: boolean;

  @Column({name:'created_at', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

}
