import { expect, test, vi } from 'vitest'
import * as path from 'path';

test('hello world', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
  await import(path.join(__dirname, 'index'));
  const firstArg = consoleLogSpy.mock.calls[0]?.[0];
  expect(firstArg).toBe('Hello, World!')
});
