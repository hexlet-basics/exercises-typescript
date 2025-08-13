import path from 'node:path';
import { expect, test, vi } from 'vitest';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  await import(path.join(import.meta.dirname, 'index'));
  const firstArg = consoleLogSpy.mock.calls[0]?.[0];
  expect(firstArg).toBe('Hello, World!');
});
