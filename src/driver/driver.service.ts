import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverModel } from './driver.model';
import { DriverDto } from './driver.dto';
@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverModel)
    private driverRepository: Repository<DriverModel>,
  ) {}

  create(data: DriverDto): Promise<DriverModel> {
    return this.driverRepository.save(data);
  }

  findAll(): Promise<DriverModel[]> {
    return this.driverRepository.find();
  }

  findOne(id: string): Promise<DriverModel> {
    return this.driverRepository.findOne(id);
  }
}
