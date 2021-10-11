import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DriverModel } from './driver.model';
import { DriverService } from './driver.service';

@Resolver(of => DriverModel)
export class DriverResolver {
  constructor(@Inject(DriverService) private driverService: DriverService) {}

  @Query(returns => DriverModel)
  async driver(@Args('id') id: string) {
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

  @Mutation(returns => CarModel)
  async linkWithCar(@Args('car_id') car_id: number, @Args('id') id: number) {
    return await this.driverService.update({ car_id }, id);
  }
}
