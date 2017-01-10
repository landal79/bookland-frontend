/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { _404Component } from './404';

describe('404ComponentComponent', () => {
  let component: _404Component;
  let fixture: ComponentFixture<_404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ _404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(_404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
