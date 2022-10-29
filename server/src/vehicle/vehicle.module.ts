import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule {}
