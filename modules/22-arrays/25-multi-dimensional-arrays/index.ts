// BEGIN
function getField(size: number): null[][] {
  // А что за запись в выражении - "Array<null>"? 
  // Такой синтаксис объясняется в объявлении типа, но чтобы использовать его в выражении - такого в теории этого и предыдущих уроков нет.
  // Нужно либо добавить это в объяснение темы, либо если это есть в следующих уроках, то не использовать в решении этого урока.
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}
// END

export default getField;
