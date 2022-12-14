import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { VehicleDto } from './dto';

@Injectable()
export class VehicleService {
    constructor(private prisma: PrismaService) { };

    async createVehicle(data: VehicleDto): Promise<VehicleDto> {
        try {
            return await this.prisma.vehicle.create({
                data: data,
            });
        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === 'P2002') throw new ForbiddenException('Code already exists!');
            }
            throw err;
        }
    }

    async updateVehicle(id: string, data: VehicleDto): Promise<VehicleDto> {
        try {
            const updatedVehicle = this.prisma.vehicle.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedVehicle;
        } catch (err) {
            throw err;
        }
    }

    async deleteVehicle(id: string): Promise<boolean> {
        try {
            await this.prisma.vehicle.delete({ where: { id: id, } })
            return true;
        } catch (err) {
            throw err;
        }
    }

    async getVehicles(): Promise<VehicleDto[]> {
        try {
            return await this.prisma.vehicle.findMany();
        } catch (err) {
            throw err;
        }
    }
}
