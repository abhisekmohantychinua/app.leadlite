import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import 'fake-indexeddb/auto';
import { webcrypto } from 'crypto';

setupZoneTestEnv();

Object.defineProperty(window, 'crypto', {
  writable: true,
  value: webcrypto,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false, // default to light mode
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, 'localStorage', {
  value: (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })(),
});
