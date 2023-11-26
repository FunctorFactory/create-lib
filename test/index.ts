import { expect, test } from '@jest/globals';
import { double } from '@functorfactory/create-lib';

test('double', () => {
  expect(double(1)).toBe(2);
});
