/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearItemService } from './crear-item.service';

describe('Service: ServicioCrearItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearItemService]
    });
  });

  it('should ...', inject([CrearItemService], (service: CrearItemService) => {
    expect(service).toBeTruthy();
  }));
});
