import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavResponsiveExampleComponent } from './sidenav-responsive-example.component';

describe('SidenavResponsiveExampleComponent', () => {
  let component: SidenavResponsiveExampleComponent;
  let fixture: ComponentFixture<SidenavResponsiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavResponsiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
