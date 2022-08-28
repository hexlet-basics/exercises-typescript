import path from 'path';
import sinon from 'sinon';

test('hello world', async () => {
  const spy = sinon.spy(console, 'log');
  await import(path.join(__dirname, 'index'));
  sinon.assert.calledWith(spy, 'Hello, World!');
});
