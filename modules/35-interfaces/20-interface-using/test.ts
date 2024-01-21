import superMan from './index';

test('guess who', () => {
  expect(superMan.guessWho('bird')).toBe("It's a bird?");
  expect(superMan.guessWho('plane')).toBe("It's a plane?");
  expect(superMan.guessWho('SupErMan')).toBe("It's a SupErMan!");
});
