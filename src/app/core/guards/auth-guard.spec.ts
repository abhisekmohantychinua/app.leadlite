import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import type { Observable } from 'rxjs';

import { UserService } from '../services/user-service';
import { authGuard } from './auth-guard';

jest.mock('nanoid', () => ({ nanoid: jest.fn(() => 'mock-nanoid') }));

describe('authGuard', () => {
  let router: Router;
  let parseUrlSpy: jest.MockedFunction<Router['parseUrl']>;
  let validateSpy: jest.Mock;
  let logoutSpy: jest.Mock;
  const routeStub = {} as ActivatedRouteSnapshot;
  const stateStub = { url: '/secure' } as RouterStateSnapshot;

  const runGuard = (): Promise<boolean | UrlTree> =>
    firstValueFrom(
      TestBed.runInInjectionContext(() => authGuard(routeStub, stateStub)) as Observable<
        boolean | UrlTree
      >,
    );

  beforeEach(() => {
    validateSpy = jest.fn().mockReturnValue(of(true));
    logoutSpy = jest.fn().mockReturnValue(of(void 0));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: UserService,
          useValue: {
            validateSessionKey: validateSpy,
            logoutUser: logoutSpy,
          },
        },
      ],
    });

    router = TestBed.inject(Router);
    parseUrlSpy = jest.spyOn(router, 'parseUrl') as jest.MockedFunction<Router['parseUrl']>;
    sessionStorage.clear();
  });

  it('should redirect to /login when no session key exists', async () => {
    const result = (await runGuard()) as UrlTree;
    expect(parseUrlSpy).toHaveBeenCalledWith('/login');
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
    expect(validateSpy).not.toHaveBeenCalled();
  });

  it('should allow navigation when session is valid', async () => {
    sessionStorage.setItem('sessionKey', 'valid');
    validateSpy.mockReturnValue(of(true));

    await expect(runGuard()).resolves.toBe(true);
    expect(validateSpy).toHaveBeenCalledWith('valid');
    expect(logoutSpy).not.toHaveBeenCalled();
  });

  it('should logout and redirect when validation fails', async () => {
    sessionStorage.setItem('sessionKey', 'invalid');
    validateSpy.mockReturnValue(of(false));

    const result = (await runGuard()) as UrlTree;
    expect(logoutSpy).toHaveBeenCalled();
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
  });

  it('should logout and redirect when validation errors', async () => {
    sessionStorage.setItem('sessionKey', 'error');
    validateSpy.mockReturnValue(throwError(() => new Error('boom')));

    const result = (await runGuard()) as UrlTree;
    expect(logoutSpy).toHaveBeenCalled();
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
  });
});
