import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import type { Observable } from 'rxjs';
import { firstValueFrom, of } from 'rxjs';

import { UserService } from '../services/user-service';
import { signupGuard } from './signup-guard';

jest.mock('nanoid', () => ({ nanoid: jest.fn(() => 'mock-nanoid') }));

describe('signupGuard', () => {
  let router: Router;
  let parseUrlSpy: jest.MockedFunction<Router['parseUrl']>;
  let hasUserSpy: jest.Mock;
  const routeStub = {} as ActivatedRouteSnapshot;
  const stateStub = { url: '/signup' } as RouterStateSnapshot;

  const runGuard = (): Promise<boolean | UrlTree> =>
    firstValueFrom(
      TestBed.runInInjectionContext(() => signupGuard(routeStub, stateStub)) as Observable<
        boolean | UrlTree
      >,
    );

  beforeEach(() => {
    hasUserSpy = jest.fn().mockReturnValue(of(false));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: UserService,
          useValue: {
            hasExistingUser: hasUserSpy,
          },
        },
      ],
    });

    router = TestBed.inject(Router);
    parseUrlSpy = jest.spyOn(router, 'parseUrl') as jest.MockedFunction<Router['parseUrl']>;
  });

  it('should allow access when no user exists', async () => {
    hasUserSpy.mockReturnValue(of(false));
    await expect(runGuard()).resolves.toBe(true);
    expect(parseUrlSpy).not.toHaveBeenCalled();
  });

  it('should redirect to login when a user already exists', async () => {
    hasUserSpy.mockReturnValue(of(true));
    const result = (await runGuard()) as UrlTree;
    expect(parseUrlSpy).toHaveBeenCalledWith('/login');
    expect(result).toEqual(parseUrlSpy.mock.results[0].value);
  });
});
