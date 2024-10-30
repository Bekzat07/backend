import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  mileage: number;

  @ManyToOne(() => User, (user) => user.reporsts)
  user: User;
}