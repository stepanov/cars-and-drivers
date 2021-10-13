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
    const result = this.driverRepository.save({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    console.log(`Result: ${JSON.stringify(result)}`);
    return result;
  }

  update(data: DriverUpdateDto, id: number): Promise<UpdateResult> {
    console.log(`id=${id} --> ${JSON.stringify(data)}`);
    const result = this.driverRepository.update(id, {
      ...data,
      updated_at: new Date().toISOString(),
    });
    console.log(`Result: ${JSON.stringify(result)}`);
    return result;
  }

  findAll(): Promise<DriverModel[]> {
    return this.driverRepository.find();
  }

  findOne(id: string): Promise<DriverModel> {
    return this.driverRepository.findOne(id);
  }
}
