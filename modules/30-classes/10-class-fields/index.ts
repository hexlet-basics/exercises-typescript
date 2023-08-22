// BEGIN
type CustomFileOptions = {
  name: string;
  size: number;
};

class CustomFile {
  name: string;

  size: number;

  constructor({ name, size }: CustomFileOptions) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
// END

export default CustomFile;
