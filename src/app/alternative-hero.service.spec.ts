import { TestBed } from '@angular/core/testing';

import { AlternativeHeroService } from './alternative-hero.service';

describe('AlternativeHeroService', () => {
  let service: AlternativeHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativeHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
