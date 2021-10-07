import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BildblockComponent } from './bildblock.component';

describe('BildblockComponent', () => {
  let component: BildblockComponent;
  let fixture: ComponentFixture<BildblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BildblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BildblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
