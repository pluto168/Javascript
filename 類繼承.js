class Car {
  constructor(brand) {
    this.brand = brand;
  }
  show() {
    console.log(`車的品牌是${this.brand}`);
  }
}

class Lexus extends Car {
  constructor(brand, lineup) {
    super(brand);
    this.lineup = lineup;
  }
  getPrice() {
    switch (this.lineup) {
      case "RX":
        return 60;
      case "NX":
        return 40;
      default:
        throw new Error("unknow");
    }
  }
}

let mycar = new Lexus("Lexus", "RX");
mycar.show();
console.log("價格是:", mycar.getPrice(), "萬");
