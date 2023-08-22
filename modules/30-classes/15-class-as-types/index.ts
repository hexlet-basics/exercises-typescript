// BEGIN
type OpitonName = string;
type OpitonSize = number;
type CustomFileOptions = { name: OpitonName, size: OpitonSize };

class CustomFile {
  name: OpitonName;

  size: OpitonSize;

  private isCopy: boolean;

  constructor(options: CustomFileOptions) {
    this.name = options.name;
    this.size = options.size;
    this.isCopy = (options instanceof CustomFile);
  }

  toString(): string {
    const copyString = this.isCopy ? '(copy) ' : '';
    return `${copyString}${this.name} (${this.size} bytes)`;
  }
}
// END

export default CustomFile;
