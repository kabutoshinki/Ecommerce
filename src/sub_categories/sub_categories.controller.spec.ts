import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoriesController } from './sub_categories.controller';
import { SubCategoriesService } from './sub_categories.service';

describe('SubCategoriesController', () => {
  let controller: SubCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoriesController],
      providers: [SubCategoriesService],
    }).compile();

    controller = module.get<SubCategoriesController>(SubCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
