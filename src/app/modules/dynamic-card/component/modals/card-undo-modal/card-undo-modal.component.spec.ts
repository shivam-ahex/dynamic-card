import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUndoModalComponent } from './card-undo-modal.component';

describe('CardUndoModalComponent', () => {
  let component: CardUndoModalComponent;
  let fixture: ComponentFixture<CardUndoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUndoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUndoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
