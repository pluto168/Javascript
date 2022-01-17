class Player {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  show() {
    console.log(`${this.name}的性別是${this.sex}`);
  }
  static info() {
    console.log("字串");
  }
}

let player = new Player("lin", "male");
console.log(player.name, player.sex);
player.show();
Player.info();
