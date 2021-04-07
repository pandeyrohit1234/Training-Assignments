import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlooComponent } from './aloo.component';

describe('AlooComponent', () => {
  let component: AlooComponent;
  let fixture: ComponentFixture<AlooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
