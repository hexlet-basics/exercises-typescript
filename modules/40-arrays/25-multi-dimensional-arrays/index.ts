type FieldRow = (string | null)[];
type Field = FieldRow[];

function getField(size: number): Field {
  const field: Field = [];
  for (let i = 0; i < size; i += 1) {
    const row: FieldRow = Array(size).fill(null, 0);
    field.push(row);
  }

  return field;
}

export default getField;
