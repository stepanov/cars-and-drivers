import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CarModel } from './car.model';
import { CarDto } from './car.dto';
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarModel)
    private carRepository: Repository<CarModel>,
  ) {}

  create(data: CarDto): Promise<CarModel> {
    return this.carRepository.save({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }

  findAll(): Promise<CarModel[]> {
    return this.carRepository.find();
  }

  findOne(id: string): Promise<CarModel> {
    return this.carRepository.findOne(id);
  }
}
