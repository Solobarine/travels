import { Test, TestingModule } from '@nestjs/testing';
import { HotelReservationController } from './hotel-reservation.controller';

describe('HotelReservationController', () => {
  let controller: HotelReservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelReservationController],
    }).compile();

    controller = module.get<HotelReservationController>(HotelReservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
