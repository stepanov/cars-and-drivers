import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverModel } from './driver.model';
import { DriverDto } from './driver.dto';
import { DriverUpdateDto } from './driver_update.dto';
@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(DriverModel)
    private driverRepository: Repository<DriverModel>,
  ) {}

  create(data: DriverDto): Promise<DriverModel> {
    return this.driverRepository.save(data);
  }

  update(data: DriverUpdateDto, id: number): Promise<UpdateResult> {
    return this.driverRepository.update(id, data);
  }

  findAll(): Promise<DriverModel[]> {
    return this.driverRepository.find();
  }

  findOne(id: string): Promise<DriverModel> {
    return this.driverRepository.findOne(id);
  }
}
