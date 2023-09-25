import { TestBed } from '@angular/core/testing';

import { GameCardsService } from './game-cards.service';

describe('GameCardsService', () => {
  let service: GameCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
