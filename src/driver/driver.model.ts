import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'drivers' })
export class DriverModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

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
}
