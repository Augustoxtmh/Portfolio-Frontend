/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EducacionService } from './educacion.service';

describe('Service: Educacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducacionService]
    });
  });

  it('should ...', inject([EducacionService], (service: EducacionService) => {
    expect(service).toBeTruthy();
  }));
});
