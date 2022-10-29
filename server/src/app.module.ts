import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    VehicleModule,
    PrismaModule
  ],
})
export class AppModule { }
