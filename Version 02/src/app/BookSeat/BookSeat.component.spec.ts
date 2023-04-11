/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookSeatComponent } from './BookSeat.component';

describe('BookSeatComponent', () => {
  let component: BookSeatComponent;
  let fixture: ComponentFixture<BookSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
