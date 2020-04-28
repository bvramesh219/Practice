import * as CryptoJS from 'crypto-js';
export class CacheUtility {

    static getEncryptedString(label: string): string {
        return CryptoJS.SHA1(label).toString();
      }
}