import { nearlyEqual } from '../src/nearly-equal';

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
    it('should able to compare NaN', () => {
        expect(nearlyEqual(NaN, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, 0.0)).toEqual(false);
        expect(nearlyEqual(-0.0, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, -0.0)).toEqual(false);
        expect(nearlyEqual(0.0, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, Number.POSITIVE_INFINITY)).toEqual(false);
        expect(nearlyEqual(Number.POSITIVE_INFINITY, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, Number.NEGATIVE_INFINITY)).toEqual(false);
        expect(nearlyEqual(Number.NEGATIVE_INFINITY, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, Number.MAX_VALUE)).toEqual(false);
        expect(nearlyEqual(Number.MAX_VALUE, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, -Number.MAX_VALUE)).toEqual(false);
        expect(nearlyEqual(-Number.MAX_VALUE, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, Number.MIN_VALUE)).toEqual(false);
        expect(nearlyEqual(Number.MIN_VALUE, NaN)).toEqual(false);
        expect(nearlyEqual(NaN, -Number.MIN_VALUE)).toEqual(false);
        expect(nearlyEqual(-Number.MIN_VALUE, NaN)).toEqual(false);
    });
});
