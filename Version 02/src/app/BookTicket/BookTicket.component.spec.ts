/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookTicketComponent } from './BookTicket.component';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let fixture: ComponentFixture<BookTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
