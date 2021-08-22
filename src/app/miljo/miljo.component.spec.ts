import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiljoComponent } from './miljo.component';

describe('MiljoComponent', () => {
  let component: MiljoComponent;
  let fixture: ComponentFixture<MiljoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiljoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiljoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
