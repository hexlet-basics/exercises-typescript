// BEGIN
type Cell = string | null;
type FieldRow = Cell[];
type Field = FieldRow[];

function getField(size: number): Field {
  const field: Field = [];
  for (let i = 0; i < size; i += 1) {
    const row: FieldRow = Array<Cell>(size).fill(null, 0);
    field.push(row);
  }

  return field;
}
// END

export default getField;
