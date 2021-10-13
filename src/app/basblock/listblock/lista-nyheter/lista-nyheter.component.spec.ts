import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNyheterComponent } from './lista-nyheter.component';

describe('ListaNyheterComponent', () => {
  let component: ListaNyheterComponent;
  let fixture: ComponentFixture<ListaNyheterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNyheterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNyheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
