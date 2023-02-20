// BEGIN
abstract class GameObject {
  private movements: Array<[x: number, y: number]> = [];

  constructor(protected x: number, protected y: number) {}

  tick(delta: number): void {
    const [x, y] = this.movements.shift() || [0, 0];
    this.x += x * delta;
    this.y += y * delta;
  }

  move(x: number, y: number): void {
    this.movements.push([x, y]);
  }

  abstract render(): string;
}
// END

export default GameObject;
