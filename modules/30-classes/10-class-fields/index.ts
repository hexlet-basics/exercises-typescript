// BEGIN
class File {
  name: string;

  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
// END

export default File;
