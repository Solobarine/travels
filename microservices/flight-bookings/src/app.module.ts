import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Flight } from './flight/flight.entity';
import { AppService } from './app.service';
import { FlightController } from './flight/flight.controller';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
    FlightModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'travels',
      entities: [Flight],
      synchronize: true,
    }),
  ],
  controllers: [AppController, FlightController],
  providers: [AppService],
})
export class AppModule {}
