import { TestBed, inject } from '@angular/core/testing';

import { AvtoService } from './avto.service';

describe('AvtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvtoService]
    });
  });

  it('should be created', inject([AvtoService], (service: AvtoService) => {
    expect(service).toBeTruthy();
  }));
});
