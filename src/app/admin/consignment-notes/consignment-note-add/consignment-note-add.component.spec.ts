import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentNoteAddComponent } from './consignment-note-add.component';

describe('ConsignmentNoteAddComponent', () => {
  let component: ConsignmentNoteAddComponent;
  let fixture: ComponentFixture<ConsignmentNoteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentNoteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentNoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
