import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<Flight> {
    return this.flightRepository.findOne({ where: { id } });
  }

  async bookFlight(id: number): Promise<Flight> {
    const flight = await this.flightRepository.findOne({ where: { id } });
    if (!flight) {
      throw new Error('Flight not found');
    }
    if (flight.availableSeats <= 0) {
      throw new Error('No available seats for booking');
    }
    flight.availableSeats--;
    return this.flightRepository.save(flight);
  }

  async cancelBooking(id: number): Promise<Flight> {
    const flight = await this.flightRepository.findOne({ where: { id } });
    if (!flight) {
      throw new Error('Flight not found');
    }
    flight.availableSeats++;
    return this.flightRepository.save(flight);
  }
}
