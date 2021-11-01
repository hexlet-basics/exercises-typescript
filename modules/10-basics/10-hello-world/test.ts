import sinon from 'sinon';
import getPathToIndex from '../../../src/tests';

test('hello world', async () => {
	// FIXME: дописать
	const spy = sinon.spy(console, 'log');
	await import(getPathToIndex());
	sinon.assert.calledWith(spy, 'Hello, World!');
});
