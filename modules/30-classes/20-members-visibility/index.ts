/* eslint-disable max-classes-per-file */

type CustomFileOptions = {
  name: string;
  size: number;
};

class CustomFile {
  private name: string;

  private size: number;

  constructor(options: CustomFileOptions) {
    this.name = options.name;
    this.size = options.size;
  }

  protected toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

// BEGIN
class ImageCustomFile extends CustomFile {
  private width: number;

  private height: number;

  constructor(options: CustomFileOptions & { width: number; height: number }) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  toString() {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}
// END

export default ImageCustomFile;
