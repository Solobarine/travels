import { Controller, Get, Post, Body } from '@nestjs/common';
import { HotelReservation } from './hotel-reservation.entitiy';
import { HotelReservationService } from './hotel-reservation.service';

@Controller('hotel-reservations')
export class HotelReservationController {
  constructor(private readonly reservationService: HotelReservationService) {}

  @Get()
  findAll(): Promise<HotelReservation[]> {
    return this.reservationService.findAll();
  }

  @Post()
  create(@Body() reservationData: HotelReservation): Promise<HotelReservation> {
    return this.reservationService.create(reservationData);
  }
}
