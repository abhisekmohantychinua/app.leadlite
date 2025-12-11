import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { Navbar } from './navbar';

jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

@Component({
  selector: 'app-theme-toggle',
  template: '<div data-testid="theme-toggle"></div>',
})
class ThemeToggleStub {}

@Component({
  selector: 'app-profile',
  template: '<div data-testid="profile"></div>',
})
class ProfileStub {}

@Component({
  selector: 'app-menu',
  template: '<div data-testid="menu"></div>',
})
class MenuStub {}

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    })
      .overrideComponent(Navbar, {
        set: {
          imports: [
            ButtonModule,
            ToolbarModule,
            NgOptimizedImage,
            ThemeToggleStub,
            ProfileStub,
            MenuStub,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
