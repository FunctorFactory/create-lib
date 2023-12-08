import { describe, expect, it } from '@jest/globals';

import { double } from '../src/index';

describe('double', () => {
  it('should double a number', () => {
    expect(double(1)).toBe(2);
  });
});
