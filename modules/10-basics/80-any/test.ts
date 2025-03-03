import { expect, test } from 'vitest'
import getParams from './index';

test('function', () => {
  expect(getParams('per=10&page=5')).toEqual({ per: '10', page: '5' });
  expect(getParams('name=hexlet&count=3&order=asc')).toEqual({ name: 'hexlet', count: '3', order: 'asc' });
});
