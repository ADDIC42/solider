let soliders = {
  name: "adam",
  health: 10,
  weapon: {
    names: "m1",
    cartridges: 30,
  },
  supplies: 3,

  fire: function () {
    this.weapon.cartridges--;
    console.log(`baxbax ${this.weapon.cartridges} / 30`);
  },
  recharge: function () {
    this.weapon.cartridges = 30;
    this.supplies--;
    console.log(`перезарядка...${this.supplies} / 3`);
  },
  hurt: function () {
    this.health--;
    console.log(`здоровье:${this.health}/10`);
    if (this.health === 0) {
      console.log(`Ты проиграл ${this.health} / 10`);
    }
  },
};
soliders.fire();
