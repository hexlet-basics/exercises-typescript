import { sinon } from 'sinon';

test('hello world', async () => {
	// FIXME: дописать
	sinon.spy(console, 'log');
	await import('./index');
});
