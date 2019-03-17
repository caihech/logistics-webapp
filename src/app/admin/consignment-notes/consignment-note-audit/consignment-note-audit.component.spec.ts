import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentNoteAuditComponent } from './consignment-note-audit.component';

describe('ConsignmentNoteAuditComponent', () => {
  let component: ConsignmentNoteAuditComponent;
  let fixture: ComponentFixture<ConsignmentNoteAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentNoteAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentNoteAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
