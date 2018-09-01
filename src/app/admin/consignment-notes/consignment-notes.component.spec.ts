import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentNotesComponent } from './consignment-notes.component';

describe('ConsignmentNotesComponent', () => {
  let component: ConsignmentNotesComponent;
  let fixture: ComponentFixture<ConsignmentNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
