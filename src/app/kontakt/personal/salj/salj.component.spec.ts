import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaljComponent } from './salj.component';

describe('SaljComponent', () => {
  let component: SaljComponent;
  let fixture: ComponentFixture<SaljComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaljComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
