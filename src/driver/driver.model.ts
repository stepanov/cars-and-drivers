import { Field, ObjectType } from '@nestjs/graphql';
import { CarModel } from 'src/cars/car.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
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
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @ManyToOne(() => CarModel, (car) => car.drivers, { eager: false })
  @JoinColumn({ name: 'car_id', referencedColumnName: 'id' })
  car: CarModel;

  @Column()
  car_id: number;
}
