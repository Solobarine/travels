import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from './flight.entity';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Flight> {
    return this.flightService.findOne(+id);
  }

  @Post(':id/book')
  bookFlight(@Param('id') id: string): Promise<Flight> {
    return this.flightService.bookFlight(+id);
  }

  @Delete(':id/cancel')
  cancelBooking(@Param('id') id: string): Promise<Flight> {
    return this.flightService.cancelBooking(+id);
  }
}
