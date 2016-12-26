/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

@Component({
  template: ''
})
class DummyComponent {
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let title: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'todo/:filter', component: DummyComponent }
        ])
      ],
      declarations: [ HeaderComponent, DummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.debugElement.query(By.css('.navbar-header'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(title.nativeElement.textContent.trim()).toBe('Todo App');
  })
});
