/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchSlotsComponent } from './search-slots.component';

describe('SearchSlotsComponent', () => {
  let component: SearchSlotsComponent;
  let fixture: ComponentFixture<SearchSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSlotsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
