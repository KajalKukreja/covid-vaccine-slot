/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AvailableSlotsComponent } from './available-slots.component';

describe('AvailableSlotsComponent', () => {
  let component: AvailableSlotsComponent;
  let fixture: ComponentFixture<AvailableSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableSlotsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
