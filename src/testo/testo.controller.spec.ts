import { Test, TestingModule } from '@nestjs/testing';
import { TestoController } from './testo.controller';

describe('TestoController', () => {
  let controller: TestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestoController],
    }).compile();

    controller = module.get<TestoController>(TestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
