/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchByPincode } from './search-by-pincode.component';

describe('SearchByPincode', () => {
  let component: SearchByPincode;
  let fixture: ComponentFixture<SearchByPincode>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByPincode]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPincode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
