export class Triangle {
  _equalSides: number;
  constructor(
    public sideA: number,
    public sideB: number,
    public sideC: number
  ) { }

  get equalSides(): number {
    return this.findEqualSides();
  }

  /**
  * Return the number of equal sides
  */
  findEqualSides() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return 3;
    } else if (this.sideA === this.sideB
      || this.sideA === this.sideC
      || this.sideB === this.sideC) {
      return 2;
    } else {
      return 0;
    }
  }
}
