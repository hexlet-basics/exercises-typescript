// BEGIN
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(data1: string | number, data2?: string): string {
  if (typeof data1 === 'number') {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  }

  return `Hi ${data1}! Happy New Year!`;
}
// END

export default newYearCongratulate;
