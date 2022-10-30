import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
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
    @Patch('/:id')
    updateVehicle(@Param('id') id: string, @Body() data: VehicleDto) {
        return this.vehicleService.updateVehicle(id, data);
    }
    @Delete('/:id')
    deleteVehicle(@Param('id') id: string) {
        return this.vehicleService.deleteVehicle(id);
    }
}
