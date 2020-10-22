import searchString from './index';

describe('search-string', () => {
  test('should be function', () => {
    expect(typeof searchString).toBe('function');
  });
  describe('should correct work', () => {
    test('searchString({}) === ""', () => {
      expect(searchString()).toBe('');
    });
    test('searchString({ test: "test" }) === "?test=test"', () => {
      expect(searchString()).toBe('?test=test');
    });
    test('searchString({ a: 123, b: "qwe", c: false, d: 0 }) === "?a=123&b=qwe&c=false&d=0"', () => {
      expect(searchString()).toBe('?a=123&b=qwe&c=false&d=0');
    });
    test('searchString({ a: 123, b: "qwe", c: null, d: undefined }) === "?a=123&b=qwe"', () => {
      expect(searchString()).toBe('?a=123&b=qwe');
    });
    test('searchString({ a: 123, b: "qwe", d: "" }) === "?a=123&b=qwe"', () => {
      expect(searchString()).toBe('?a=123&b=qwe');
    });
  });
});
