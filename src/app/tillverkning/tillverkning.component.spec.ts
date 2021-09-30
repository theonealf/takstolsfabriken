import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TillverkningComponent } from './tillverkning.component';

describe('TillverkningComponent', () => {
  let component: TillverkningComponent;
  let fixture: ComponentFixture<TillverkningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TillverkningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TillverkningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
