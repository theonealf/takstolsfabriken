import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertFormComponent } from './offert-form.component';

describe('OffertFormComponent', () => {
  let component: OffertFormComponent;
  let fixture: ComponentFixture<OffertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
