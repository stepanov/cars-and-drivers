import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CarModel } from './car.model';
import { CarService } from './car.service';

@Resolver(of => CarModel)
export class CarResolver {
  constructor(@Inject(CarService) private carService: CarService) {}

  @Query(returns => CarModel)
  async car(@Args('id') id: string) {
    return await this.carService.findOne(id);
  }

  @Query(returns => [CarModel])
  async cars() {
    return await this.carService.findAll();
  }

  @Mutation(returns => CarModel)
  async createCar(
    @Args('plate_number') plate_number: string,
    @Args('brand') brand: string,
    @Args('note') note: string,
  ) {
    return await this.carService.create({ plate_number, brand, note });
  }
}
