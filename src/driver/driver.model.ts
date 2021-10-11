import { Field, ObjectType } from '@nestjs/graphql';
import { CarModel } from 'src/cars/car.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'drivers' })
export class DriverModel {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ length: 255, nullable: false })
  name: string;

  @Field()
  @Column({ length: 50, nullable: true })
  phone: string;

  @Field()
  @Column({ length: 255, nullable: true })
  note: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => CarModel, (car) => car.drivers)
  car: CarModel;
}
