type Entry = {
  [key: string]: number
};

interface IPhonebook {
  entries: Entry
  get(key: string): number | null
  set(key: string, value: number): void
}

// BEGIN
export default class Phonebook implements IPhonebook {
  entries: Entry = {};

  get(key: string): number | null {
    return key in this.entries ? this.entries[key] : null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}
// END
