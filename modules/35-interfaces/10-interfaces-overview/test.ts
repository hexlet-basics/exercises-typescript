import * as path from 'path';
import * as sinon from 'sinon';

test('beep', async () => {
  const spy = sinon.spy(console, 'log');
  await import(path.join(__dirname, 'index'));
  sinon.assert.calledWith(spy, sinon.match.string);
});
