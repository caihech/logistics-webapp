import { TestBed, inject } from '@angular/core/testing';

import { ConsignmentNotesService } from './consignment-notes.service';

describe('ConsignmentNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsignmentNotesService]
    });
  });

  it('should be created', inject([ConsignmentNotesService], (service: ConsignmentNotesService) => {
    expect(service).toBeTruthy();
  }));
});
