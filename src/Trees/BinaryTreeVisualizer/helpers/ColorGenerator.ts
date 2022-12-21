import getRgbString from "../utils/getRgbString";

// the gap between two ids
const gap = 10;

class ColorGenerator {
  private red = 0;
  private green = 0;
  private blue = 1;

  incrementColor(color: "red" | "green" | "blue") {
    this[color] = (this[color] + gap) % 256;
  }

  getNextColor() {
    const color = getRgbString(this.red, this.green, this.blue);

    this.incrementColor("blue");
    if (this.blue < gap) {
      this.incrementColor("green");
      if (this.green < gap) {
        this.incrementColor("red");
      }
    }

    return color;
  }
}

export default ColorGenerator;
