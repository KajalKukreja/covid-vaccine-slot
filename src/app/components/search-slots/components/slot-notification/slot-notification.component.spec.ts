/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlotNotification } from './slot-notification.component';

describe('SlotNotification', () => {
  let component: SlotNotification;
  let fixture: ComponentFixture<SlotNotification>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlotNotification]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
