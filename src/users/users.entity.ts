import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ReportEntity } from 'src/reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  @Exclude()
  // We exclude this field from the serialized output.
  password: string;

  @OneToMany(() => ReportEntity, (report) => report.user)
  reporsts: ReportEntity[];

  @Column({ default: false })
  admin: boolean;

  @AfterInsert()
  logInsert() {
    console.log(`User with email ${this.id} has been inserted.`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`User with email ${this.email} has been updated.`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`User with email ${this.email} has been removed.`);
  }
}

// Locate the findOne method and update the return to look like this:

// findOne(id: number) {
//   return this.repo.findOneBy({ id });
// }
// Locate the find method and update the return to look like this:

// find(email: string) {
//   return this.repo.find({ where: { email } });
// }
