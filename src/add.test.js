const add = require("./add");

describe("add", () => {
  describe("when non-numbers are passed", () => {
    it("throws an error for an array", () => {
      expect(() => add([1,2])).toThrow(new Error('All inputs must be numbers'))
    });

    it("throws an error for an string", () => {
      expect(() => add('a')).toThrow(new Error('All inputs must be numbers'))
    });

    it("throws an error for an object", () => {
      expect(() => add({})).toThrow(new Error('All inputs must be numbers'))
    });

    it("throws an error for undefined", () => {
      expect(() => add(undefined)).toThrow(new Error('All inputs must be numbers'))
    });
  });

  describe("when numbers are passed", () => {
    it("should add one number", () => {
      expect(add()).toBe(0);
    });

    it("should add one number", () => {
      expect(add(1)).toBe(1);
    });

    it("should add two numbers", () => {
      expect(add(1, 2)).toBe(3);
    });

    it("should add three numbers", () => {
      expect(add(1, 2, 3.5)).toBe(6.5);
    });
  });
});
