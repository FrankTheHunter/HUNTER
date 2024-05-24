import { Test, TestingModule } from '@nestjs/testing';
import { HuntersService } from '../hunters/hunters.service';

describe('HuntersService', () => {
  let service: HuntersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HuntersService],
    }).compile();

    service = module.get<HuntersService>(HuntersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
