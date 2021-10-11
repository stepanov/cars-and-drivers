import { Field, ObjectType } from '@nestjs/graphql';
import { DriverModel } from 'src/driver/driver.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'cars' })
export class CarModel {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ length: 255, nullable: false })
  plate_number: string;

  @Field()
  @Column({ length: 50, nullable: true })
  brand: string;

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

  @OneToMany(() => DriverModel, (driver) => driver.car)
  drivers: DriverModel[];
}
