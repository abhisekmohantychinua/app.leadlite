import { TestBed } from '@angular/core/testing';

import { CryptoService } from './crypto-service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hashPBKDF2Async', () => {
    it('should return same hash for same data and salt', async () => {
      const hash1 = await service.hashPBKDF2Async('password', 'mysalt');
      const hash2 = await service.hashPBKDF2Async('password', 'mysalt');
      expect(hash1).toBe(hash2);
    });

    it('should return different hash for different salts', async () => {
      const hash1 = await service.hashPBKDF2Async('password', 'salt1');
      const hash2 = await service.hashPBKDF2Async('password', 'salt2');
      expect(hash1).not.toBe(hash2);
    });

    it('should return different hash for different data', async () => {
      const hash1 = await service.hashPBKDF2Async('password1', 'salt');
      const hash2 = await service.hashPBKDF2Async('password2', 'salt');
      expect(hash1).not.toBe(hash2);
    });

    it('should produce a valid 64-character lowercase hex string', async () => {
      const hash = await service.hashPBKDF2Async('test', 'salt');
      expect(hash).toMatch(/^[0-9a-f]{64}$/);
    });
  });

  describe('bufferToHex', () => {
    it('should convert ArrayBuffer to correct hex string', async () => {
      // Create a buffer [0x01, 0x02, 0xff]
      const buffer = new Uint8Array([1, 2, 255]).buffer;

      const hex = service['bufferToHex'](buffer);

      expect(hex).toBe('0102ff');
    });
  });

  describe('hashSHA256Async', () => {
    it('should return same hash for same input', async () => {
      const hash1 = await service.hashSHA256Async('hello');
      const hash2 = await service.hashSHA256Async('hello');
      expect(hash1).toBe(hash2);
    });

    it('should return different hashes for different inputs', async () => {
      const hash1 = await service.hashSHA256Async('input1');
      const hash2 = await service.hashSHA256Async('input2');
      expect(hash1).not.toBe(hash2);
    });

    it('should produce a valid 64-character lowercase hex string', async () => {
      const hash = await service.hashSHA256Async('some data');
      expect(hash).toMatch(/^[0-9a-f]{64}$/);
    });

    it('should match known SHA-256 output for "abc"', async () => {
      const hash = await service.hashSHA256Async('abc');
      // Verified SHA-256('abc')
      expect(hash).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
    });
  });
});
