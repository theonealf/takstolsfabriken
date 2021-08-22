import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakstolstyperComponent } from './takstolstyper.component';

describe('TakstolstyperComponent', () => {
  let component: TakstolstyperComponent;
  let fixture: ComponentFixture<TakstolstyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakstolstyperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakstolstyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
