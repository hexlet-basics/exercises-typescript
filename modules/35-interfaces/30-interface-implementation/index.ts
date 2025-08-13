type Entry = {
  [key: string]: number;
};

interface IPhonebook {
  get(key: string): number | null;
  set(key: string, value: number): void;
}

// BEGIN
class Phonebook implements IPhonebook {
  private readonly entries: Entry = {};

  get(key: string): number | null {
    return key in this.entries ? this.entries[key] : null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}
// END

export default Phonebook;
