// BEGIN
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

const deepFreeze = <T extends object>(obj: T): DeepReadonly<T> => {
  const freezedObj = Object.freeze(obj);

  Object.values(freezedObj).forEach((value) => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });

  return freezedObj;
};
// END

export default deepFreeze;
