import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalaComponent } from './lala.component';

describe('LalaComponent', () => {
  let component: LalaComponent;
  let fixture: ComponentFixture<LalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
