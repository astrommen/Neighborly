import { TestBed } from '@angular/core/testing';

import { FoodBankService } from './food-bank.service';

describe('FoodBankService', () => {
  let service: FoodBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
