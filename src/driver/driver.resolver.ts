import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DriverModel } from './driver.model';
import { DriverService } from './driver.service';
import { CarModel } from 'src/cars/car.model';
import { CarService } from 'src/cars/car.service';

@Resolver(of => DriverModel)
export class DriverResolver {
  constructor(
    @Inject(DriverService) private driverService: DriverService,
    @Inject(CarService) private carService: CarService,
  ) {}

  @Query(returns => DriverModel)
  async driver(@Args('id') id: number) {
    return await this.driverService.findOne(id);
  }

  @Query(returns => [DriverModel])
  async drivers() {
    return await this.driverService.findAll();
  }

  @Mutation(returns => DriverModel)
  async createDriver(
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('note') note: string,
  ) {
    return await this.driverService.create({ name, phone, note });
  }

  @Mutation(returns => DriverModel)
  async updateDriver(@Args('id') id: number, @Args('car_id') car_id: number) {
    console.log(`ID: ${id}; car_id: ${car_id}`);
    return await this.driverService.update({ car_id }, id);
  }

  @ResolveProperty()
  public async author(@Parent() parent): Promise<CarModel> {
    return this.carService.findOne(parent.car_id);
  }
}
