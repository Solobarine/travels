// reservation.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HotelReservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  hotelId: number;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;
}
