export class StringUtility {
    static trimSlashes(text: string): string {
        return text.replace(/^\/+|\/+$/g, ''); //replace starting and ending "/"
    }

    static isNullOrWhiteSpace(s: string) {
        return !s || !s.trim();
      }
}