import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeOfDataBindingComponent } from './all-type-of-data-binding.component';

describe('AllTypeOfDataBindingComponent', () => {
  let component: AllTypeOfDataBindingComponent;
  let fixture: ComponentFixture<AllTypeOfDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTypeOfDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTypeOfDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
