import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import type { Observable } from 'rxjs';
import { firstValueFrom, of, throwError } from 'rxjs';

import { UserService } from '../services/user-service';
import { loginGuard } from './login-guard';

jest.mock('nanoid', () => ({ nanoid: () => 'mock-id' }));

describe('loginGuard', () => {
  let router: Router;
  let parseUrlSpy: jest.MockedFunction<Router['parseUrl']>;
  let hasExistingUserMock: jest.Mock;
  const routeStub = {} as ActivatedRouteSnapshot;
  const stateStub = { url: '/login' } as RouterStateSnapshot;

  const runGuard = (): Promise<boolean | UrlTree> =>
    TestBed.runInInjectionContext(() =>
      firstValueFrom(loginGuard(routeStub, stateStub) as Observable<boolean | UrlTree>),
    );

  beforeEach(() => {
    hasExistingUserMock = jest.fn().mockReturnValue(of(true));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{ provide: UserService, useValue: { hasExistingUser: hasExistingUserMock } }],
    });

    router = TestBed.inject(Router);
    parseUrlSpy = jest.spyOn(router, 'parseUrl') as jest.MockedFunction<Router['parseUrl']>;
    sessionStorage.clear();
  });

  it('should allow access when session is empty but a user exists', async () => {
    hasExistingUserMock.mockReturnValueOnce(of(true));
    await expect(runGuard()).resolves.toBe(true);
    expect(parseUrlSpy).not.toHaveBeenCalled();
    expect(hasExistingUserMock).toHaveBeenCalled();
  });

  it('should redirect to root when session key exists', async () => {
    sessionStorage.setItem('sessionKey', 'active');
    const result = (await runGuard()) as UrlTree;
    expect(parseUrlSpy).toHaveBeenCalledWith('/');
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
    expect(hasExistingUserMock).not.toHaveBeenCalled();
  });

  it('should redirect to signup when no user exists', async () => {
    hasExistingUserMock.mockReturnValueOnce(of(false));
    const result = (await runGuard()) as UrlTree;
    expect(parseUrlSpy).toHaveBeenCalledWith('/signup');
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
  });

  it('should redirect to signup when lookup fails', async () => {
    hasExistingUserMock.mockReturnValueOnce(throwError(() => new Error('db broken')));
    const result = (await runGuard()) as UrlTree;
    expect(parseUrlSpy).toHaveBeenCalledWith('/signup');
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
  });
});
