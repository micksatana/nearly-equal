const nearlyEqual = require('../lib/index');

describe('nearlyEqual', () => {
    it('should correctly compare 0.1 + 0.2 with 0.3', () => {
        expect(nearlyEqual(0.1 + 0.2, 0.3)).toEqual(true);
    });
    it('should correctly compare 1.14 + 0.21 with 1.35', () => {
        expect(nearlyEqual(1.14 + 0.21, 1.35)).toEqual(true);
    });
    it('should correctly compare 0.10 - 0.21 with -0.11', () => {
        expect(nearlyEqual(0.10 - 0.21, -0.11)).toEqual(true);
    });
    it('should correctly compare 1.14 * 0.01 with 0.0114', () => {
        expect(nearlyEqual(1.14 * 0.01, 0.0114)).toEqual(true);
    });
    it('should correctly compare 1.14 / 0.01 with 114', () => {
        expect(nearlyEqual(1.14 / 0.01, 114)).toEqual(true);
    });
    it('should correctly compare 100 / 0 with Infinity', () => {
        expect(nearlyEqual(100 / 0, Infinity)).toEqual(true);
    });
    it('should correctly compare 0 with Number.MIN_VALUE', () => {
        expect(nearlyEqual(0, Number.MIN_VALUE)).toEqual(false);
    });
});
