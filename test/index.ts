import { double } from '@functorfactory/create-lib';
import { describe, expect, it } from '@jest/globals';

describe('double', () => {
  it('should double a number', () => {
    expect(double(1)).toBe(2);
  });
});
