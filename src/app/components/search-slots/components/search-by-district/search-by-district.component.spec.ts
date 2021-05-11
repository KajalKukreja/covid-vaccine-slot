/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchByDistrict } from './search-by-district.component';

describe('SearchByDistrict', () => {
  let component: SearchByDistrict;
  let fixture: ComponentFixture<SearchByDistrict>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByDistrict]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByDistrict);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
