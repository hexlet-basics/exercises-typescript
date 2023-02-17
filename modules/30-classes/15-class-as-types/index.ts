// BEGIN
class File {
  name: string;

  size: number;

  isCopy?: boolean;

  constructor(options: File) {
    this.name = options.name;
    this.size = options.size;

    if (options instanceof File) {
      this.isCopy = true;
    }
  }

  toString() {
    return [this.isCopy && '(copy)', this.name, `(${this.size} bytes)`].filter(Boolean).join(' ');
  }
}
// END

export default File;
