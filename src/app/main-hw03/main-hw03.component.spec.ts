import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHW03Component } from './main-hw03.component';

describe('MainHW03Component', () => {
  let component: MainHW03Component;
  let fixture: ComponentFixture<MainHW03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHW03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHW03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
