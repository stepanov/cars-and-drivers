import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CarModel } from './car.model';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CarModel])],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
