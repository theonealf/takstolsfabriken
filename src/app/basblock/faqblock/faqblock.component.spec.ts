import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqblockComponent } from './faqblock.component';

describe('FaqblockComponent', () => {
  let component: FaqblockComponent;
  let fixture: ComponentFixture<FaqblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
