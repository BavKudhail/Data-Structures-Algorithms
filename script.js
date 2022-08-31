const object4 = {
  a: function () {
    return console.log(this);
  },
};

// instantiation
class Player {
  constructor(name, element) {
    this.name = name;
    this.element = element;
  }

  //   introduce plater
  introduce() {
    return console.log(
      `Hello, I am ${this.name}, I belong to ${this.element} nation!`
    );
  }
}

// O-O-P
let bav = new Player('Bavvy', 'Fire');

bav.introduce();

let dan = new Player('Danny', 'Earth');

dan.introduce();

// because this extends player - it also has access to the original functions
class Wizard extends Player {
  constructor(name, element) {
    super(name, element);
  }
  play() {
    console.log(`I will destroy you with my ${this.element}!!!!`);
  }
}

let renny = new Wizard('Renny', 'EXODUS');

renny.play();

renny.introduce();
