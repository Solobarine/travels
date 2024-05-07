import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelReservation } from './hotel-reservation.entitiy';
import { HotelReservationController } from './hotel-reservation.controller';
import { HotelReservationService } from './hotel-reservation.service';
import { HotelReservationRepository } from './hotel-reservation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HotelReservation]),
    HotelReservationRepository,
  ],
  controllers: [HotelReservationController],
  providers: [HotelReservationService],
})
export class HotelReservationModule {}
