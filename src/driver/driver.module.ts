import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DriverModel } from './driver.model';
import { DriverService } from './driver.service';
import { DriverResolver } from './driver.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([DriverModel])],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
