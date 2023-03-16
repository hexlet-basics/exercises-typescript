import * as path from 'path';
import * as sinon from 'sinon';

test('guess who', async () => {
  const spy = sinon.spy(console, 'log');
  await import(path.join(__dirname, 'index'));
  sinon.assert.calledWith(spy, "It's a bird?");
  sinon.assert.calledWith(spy, 'No!');
  sinon.assert.calledWith(spy, "It's a plane?");
  sinon.assert.calledWith(spy, 'No!');
  sinon.assert.calledWith(spy, "It's a superman?");
  sinon.assert.calledWith(spy, "It's a superman!");
});
