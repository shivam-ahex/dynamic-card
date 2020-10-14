import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditModalComponent } from './card-edit-modal.component';

describe('CardEditModalComponent', () => {
  let component: CardEditModalComponent;
  let fixture: ComponentFixture<CardEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
