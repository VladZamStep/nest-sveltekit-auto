import { Controller, Post, Get, Body } from '@nestjs/common';
import { VehicleDto } from './dto';
import { VehicleService } from './vehicle.service';

@Controller()
export class VehicleController {
    constructor(private vehicleService: VehicleService) { }

    @Post('create')
    createVehicle(@Body() data: VehicleDto) {
        return this.vehicleService.createVehicle(data);
    }
    @Get()
    getVehicles() {
        return this.vehicleService.getVehicles();
    }
}
