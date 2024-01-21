// BEGIN
type OptionName = string;
type OptionSize = number;
type CustomFileOptions = { name: OptionName, size: OptionSize };

class CustomFile {
  name: OptionName;

  size: OptionSize;

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
