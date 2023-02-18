// BEGIN
class File {
  constructor(private name: string, private size: number) { }

  get sizeInKb() {
    return this.size * 1024;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
// END

export default File;
