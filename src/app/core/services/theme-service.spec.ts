import { TestBed } from '@angular/core/testing';
import { ThemeService, ThemeType } from './theme-service';

describe('ThemeService (Jest)', () => {
  let service: ThemeService;
  let htmlElement: HTMLElement;

  beforeAll(() => {
    // Global matchMedia mock for jsdom
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    // Use the existing <html> element
    htmlElement = document.documentElement;

    // Clear mocks and local storage
    jest.clearAllMocks();
    localStorage.clear();

    // Inject service
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  // --- BASIC CREATION TEST ---
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // --- INIT THEME TESTS ---
  describe('#initTheme', () => {
    it('should set dark theme when stored theme is "dark"', () => {
      localStorage.setItem('theme', 'dark');
      service.initTheme();
      expect(htmlElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should set light theme when stored theme is "light"', () => {
      localStorage.setItem('theme', 'light');
      service.initTheme();
      expect(htmlElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('light');
    });

    it('should follow system preference when theme is "system" (dark mode)', () => {
      localStorage.setItem('theme', 'system');
      (window.matchMedia as jest.Mock).mockReturnValueOnce({ matches: true } as MediaQueryList);
      service.initTheme();
      expect(htmlElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem('theme')).toBe('system');
    });

    it('should follow system preference when theme is "system" (light mode)', () => {
      localStorage.setItem('theme', 'system');
      (window.matchMedia as jest.Mock).mockReturnValueOnce({ matches: false } as MediaQueryList);
      service.initTheme();
      expect(htmlElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('theme')).toBe('system');
    });

    it('should determine theme based on time when no stored theme (auto)', () => {
      // Mock time to night (22 = 10PM)
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
      service.initTheme();
      expect(localStorage.getItem('theme')).toBe('auto');
      expect(htmlElement.classList.contains('dark')).toBe(false); // matches current logic
    });

    it('should set dark theme for daytime (6am - 6pm)', () => {
      localStorage.setItem('theme', 'auto');
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10); // 10AM
      service.initTheme();
      expect(htmlElement.classList.contains('dark')).toBe(true); // matches current logic
    });

    it('should not throw if <html> element is missing', () => {
      // Mock querySelector to return null temporarily
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(null);

      localStorage.setItem('theme', 'dark');
      expect(() => service.initTheme()).not.toThrow();

      querySelectorSpy.mockRestore(); // restore original behavior
    });
  });

  // --- SET THEME TESTS ---
  describe('#setTheme', () => {
    beforeEach(() => jest.clearAllMocks());

    it('should store theme in localStorage', () => {
      service.setTheme('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should call initTheme after setting theme', () => {
      const initSpy = jest.spyOn(service, 'initTheme');
      service.setTheme('light');
      expect(initSpy).toHaveBeenCalled();
    });

    it('should accept all valid theme types', () => {
      const themes: ThemeType[] = ['light', 'dark', 'system', 'auto'];
      for (const theme of themes) {
        service.setTheme(theme);
        expect(localStorage.getItem('theme')).toBe(theme);
      }
    });
  });
});
