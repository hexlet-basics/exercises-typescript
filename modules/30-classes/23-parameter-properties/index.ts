// BEGIN
class File {
  constructor(private name: string, private size: number) { }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
// END

export default File;
