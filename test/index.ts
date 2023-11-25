import { expect, test } from '@jest/globals';
import { double } from 'src/index.js';

test('double', () => {
  expect(double(1)).toBe(2);
});
