import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BassidaComponent } from './bassida.component';

describe('BassidaComponent', () => {
  let component: BassidaComponent;
  let fixture: ComponentFixture<BassidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BassidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BassidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
