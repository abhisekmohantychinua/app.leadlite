import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  /**
   * Asynchronously hashes a base key using a salt 100K times using SHA-256.
   * This function returns a promise that resolves to a 64-character lowercase hex string.
   * @param data - the base key to hash
   * @param salt - the salt to use when hashing the base key
   * @returns a promise that resolves to a 64-character lowercase hex string
   */
  async hashPBKDF2Async(data: string, salt: string): Promise<string> {
    const encoder = new TextEncoder();

    // 1. Define base key
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(data),
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    );

    // 2. Hash base key 100K times with salt using SHA-256
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: encoder.encode(salt),
        iterations: 100_000,
        hash: 'SHA-256',
      },
      keyMaterial,
      256
    );

    // 3. Export actual key
    return this.bufferToHex(derivedBits);
  }

  /**
   * Converts an ArrayBuffer to a 64-character lowercase hex string.
   * @param buffer - the ArrayBuffer to convert
   * @returns a 64-character lowercase hex string
   */
  private bufferToHex(buffer: ArrayBuffer): string {
    return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Asynchronously hashes the given data using SHA-256.
   * @param data - the data to hash
   * @returns a promise that resolves to a 64-character lowercase hex string
   */
  async hashSHA256Async(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    return this.bufferToHex(hashBuffer);
  }
}
