import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmossComponent } from './omoss.component';

describe('OmossComponent', () => {
  let component: OmossComponent;
  let fixture: ComponentFixture<OmossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
