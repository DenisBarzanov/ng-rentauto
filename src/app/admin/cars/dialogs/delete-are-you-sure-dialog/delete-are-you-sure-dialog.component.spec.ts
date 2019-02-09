import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteAreYouSureDialogComponent} from './delete-are-you-sure-dialog.component';

describe('DeleteAreYouSureDialogComponent', () => {
  let component: DeleteAreYouSureDialogComponent;
  let fixture: ComponentFixture<DeleteAreYouSureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAreYouSureDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAreYouSureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
