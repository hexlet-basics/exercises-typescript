// BEGIN
type FileOptions = {
  name: string;
  size: number;
};

class File {
  name: string;

  size: number;

  constructor({ name, size }: FileOptions) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
// END

export default File;
