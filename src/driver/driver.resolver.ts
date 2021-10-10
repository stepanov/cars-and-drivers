import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Inject, Query } from '@nestjs/common';
import { DriverModel } from './driver.model'
import { DriverService } from './driver.service'

@Resolver()
export class DriverResolver {
    constructor(@Inject(DriverService) private driverService: DriverService) {}

    @Query(returns => DriverModel)
    async driver(@Args('id') id: string): Promise(DriverModel) {
        return await this.driverService.findOne(id)
    }

    @Query(returns => [DriverModel])
    async drivers(): Promise<DriverModel[]> {
        return await this.driverService.findAll()
    }

    @Mutation(returns => DriverModel)
    async createDriver(
        @Args('name') name: string,
        @Args('phone') phone: string,
        @Args('note') note: string,
    ): Promise<DriverModel> {
        return await this.driverService.create({name, phone, note})
    }
}
