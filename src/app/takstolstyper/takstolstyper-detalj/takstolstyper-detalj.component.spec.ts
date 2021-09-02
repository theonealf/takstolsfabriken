import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakstolstyperDetaljComponent } from './takstolstyper-detalj.component';

describe('TakstolstyperDetaljComponent', () => {
  let component: TakstolstyperDetaljComponent;
  let fixture: ComponentFixture<TakstolstyperDetaljComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakstolstyperDetaljComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakstolstyperDetaljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
