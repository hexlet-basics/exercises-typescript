import { expect, test, expectTypeOf } from 'vitest'
import { superMan, ISuperman, IBird, IPlane } from './index';

test('guess who', () => {
  expect(superMan.guessWho('bird')).toBe("It's a bird?");
  expect(superMan.guessWho('plane')).toBe("It's a plane?");
  expect(superMan.guessWho('SupErMan')).toBe("It's a SupErMan!");
});

test('Types check', () => {
  expectTypeOf<ISuperman>().toMatchTypeOf<IBird>();
  expectTypeOf<ISuperman>().toMatchTypeOf<IPlane>();
  expectTypeOf(superMan).toMatchTypeOf<ISuperman>();

  expect(superMan).toHaveProperty('canFly');
  expect(superMan).toHaveProperty('isLiving');
  expect(superMan).toHaveProperty('canCarryPeople');
});
