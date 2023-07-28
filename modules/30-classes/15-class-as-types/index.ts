// BEGIN
type OpitonName = string;
type OpitonSize = number;
type FileOptions = { name: OpitonName, size: OpitonSize };

class File {
  name: OpitonName;

  size: OpitonSize;

  private isCopy: boolean;

  constructor(options: FileOptions) {
    this.name = options.name;
    this.size = options.size;
    this.isCopy = (options instanceof File);
  }

  toString(): string {
    const copyString = this.isCopy ? '(copy) ' : '';
    return `${copyString}${this.name} (${this.size} bytes)`;
  }
}
// END

export default File;
