/* eslint-disable max-classes-per-file */

type FileOptions = {
  name: string;
  size: number;
};

class File {
  private name: string;

  private size: number;

  constructor(options: FileOptions) {
    this.name = options.name;
    this.size = options.size;
  }

  protected toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

// BEGIN
class ImageFile extends File {
  private width: number;

  private height: number;

  constructor(options: FileOptions & { width: number; height: number }) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  toString() {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}
// END

export default ImageFile;
