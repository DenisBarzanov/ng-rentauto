import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsComponentComponent } from './bookings-component.component';

describe('BookingsComponentComponent', () => {
  let component: BookingsComponentComponent;
  let fixture: ComponentFixture<BookingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
