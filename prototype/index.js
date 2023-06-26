class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof');
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log('I am flying!!!');
  }
}

const dog1 = new Dog('Rover');
const dog2 = new SuperDog('Daisy');

dog1.bark();

Dog.prototype.play = () => console.log('I am playing!!!')

dog1.play();
dog2.fly();
