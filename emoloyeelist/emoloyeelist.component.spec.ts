import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeelistComponent } from './emoloyeelist.component';

describe('EmoloyeelistComponent', () => {
  let component: EmoloyeelistComponent;
  let fixture: ComponentFixture<EmoloyeelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmoloyeelistComponent]
    });
    fixture = TestBed.createComponent(EmoloyeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
