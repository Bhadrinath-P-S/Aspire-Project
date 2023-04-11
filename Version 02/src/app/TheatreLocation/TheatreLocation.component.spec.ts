/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheatreLocationComponent } from './TheatreLocation.component';

describe('TheatreLocationComponent', () => {
  let component: TheatreLocationComponent;
  let fixture: ComponentFixture<TheatreLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
