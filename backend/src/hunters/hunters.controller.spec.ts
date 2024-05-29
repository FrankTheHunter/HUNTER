import { Test, TestingModule } from '@nestjs/testing';
import { HuntersController } from './hunters.controller';
import { HuntersService } from './hunters.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { afterEach, beforeEach, describe, it } from 'node:test';
import { jest } from '@jest/globals';

describe('HuntersController', () => {
  let app: INestApplication;
  let huntersService = { createhunters: jest.fn(), validateUser: jest.fn() };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [HuntersController],
      providers: [
        {
          provide: HuntersService,
          useValue: huntersService,
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/POST register', () => {
    const dto = { email: 'test@test.com', password: 'password' };
    return request(app.getHttpServer())
      .post('/hunters_registered/register')
      .send(dto)
      .expect(201)
      .expect({ message: 'Hunters crées avec succées ' });
  });

  it('/POST login', () => {
    const dto = { email: 'test@test.com', password: 'password' };
    huntersService.validateUser.mockResolvedValue(dto as never);
    return request(app.getHttpServer())
      .post('/hunters_registered/login')
      .send(dto)
      .expect(200);
  });

  afterEach(async () => {
    await app.close();
  });
});