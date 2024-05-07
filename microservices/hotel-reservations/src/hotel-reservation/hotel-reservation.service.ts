import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HotelReservation } from './hotel-reservation.entitiy';
import { HotelReservationRepository } from './hotel-reservation.repository';

@Injectable()
export class HotelReservationService {
  constructor(
    @InjectRepository(HotelReservation)
    private reservationRepository: HotelReservationRepository,
  ) {}

  async findAll(): Promise<HotelReservation[]> {
    return this.reservationRepository.find();
  }

  async create(reservationData: HotelReservation): Promise<HotelReservation> {
    return this.reservationRepository.save(reservationData);
  }
}
