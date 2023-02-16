import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalaComponent } from './kala.component';

describe('KalaComponent', () => {
  let component: KalaComponent;
  let fixture: ComponentFixture<KalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
