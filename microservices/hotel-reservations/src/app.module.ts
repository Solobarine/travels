import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelReservation } from './hotel-reservation/hotel-reservation.entitiy';
import { HotelReservationController } from './hotel-reservation/hotel-reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelReservationService } from './hotel-reservation/hotel-reservation.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'travels',
      entities: [HotelReservation],
      synchronize: true,
    }),
  ],
  controllers: [AppController, HotelReservationController],
  providers: [AppService, HotelReservationService],
})
export class AppModule {}
