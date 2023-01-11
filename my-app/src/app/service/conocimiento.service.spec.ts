/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConocimientoService } from './conocimiento.service';

describe('Service: Conocimiento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConocimientoService]
    });
  });

  it('should ...', inject([ConocimientoService], (service: ConocimientoService) => {
    expect(service).toBeTruthy();
  }));
});
