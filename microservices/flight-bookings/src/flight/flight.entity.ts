import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  destination: string;

  @Column()
  date: Date;

  @Column()
  availableSeats: number;

  @Column()
  totalSeats: number;
}
