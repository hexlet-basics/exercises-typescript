type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  // BEGIN
  name: {
    value: 'Kirill',
    validator: (val: string) => val.length > 1,
  },
  age: {
    value: 17,
    validator: (val: number) => val > 18,
  },
  // END
};

export default form;
