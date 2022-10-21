import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHW03Component } from './child-hw03.component';

describe('ChildHW03Component', () => {
  let component: ChildHW03Component;
  let fixture: ComponentFixture<ChildHW03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildHW03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildHW03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
