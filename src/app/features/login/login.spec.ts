import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';

import { UserService } from '../../core/services/user-service';
import Login from './login';

jest.mock('nanoid', () => ({ nanoid: () => 'mock-id' }));

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let loginUserMock: jest.Mock;
  let navigateMock: jest.Mock;
  let messageService: MessageService;
  let messageAddSpy: jest.SpyInstance;

  beforeEach(async () => {
    loginUserMock = jest.fn().mockReturnValue(of('session-key'));
    navigateMock = jest.fn();

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        provideNoopAnimations(),
        { provide: UserService, useValue: { loginUser: loginUserMock } },
        { provide: Router, useValue: { navigateByUrl: navigateMock } },
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    messageAddSpy = jest.spyOn(messageService, 'add').mockImplementation(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not attempt login when the form is invalid', () => {
    component.handleLoginFormSubmit();
    expect(loginUserMock).not.toHaveBeenCalled();
  });

  it('should submit credentials and navigate on success', () => {
    component.form.patchValue({ username: 'jane_doe', password: 'Passw0rd' });

    component.handleLoginFormSubmit();

    expect(loginUserMock).toHaveBeenCalledWith('jane_doe', 'Passw0rd');
    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'success', summary: 'Login successful' }),
    );
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('should show an error toast when login fails', () => {
    loginUserMock.mockReturnValueOnce(throwError(() => new Error('boom')));
    component.form.patchValue({ username: 'jane_doe', password: 'Passw0rd' });

    component.handleLoginFormSubmit();

    expect(messageAddSpy).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'error', summary: 'Login failed' }),
    );
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
