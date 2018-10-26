import { TestBed } from '@angular/core/testing';

import { GameOperatorService } from './game-operator.service';

describe('GameOperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOperatorService = TestBed.get(GameOperatorService);
    expect(service).toBeTruthy();
  });
});
