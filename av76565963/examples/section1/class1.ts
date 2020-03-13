// stopped at p16
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter = new Greeter('world');
greeter.greet();

// ======================================= //
class Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} m`);
    }

    bark() {}
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 5) {
        console.log('moving...');
        super.move(distance);
    }

    bark() {
        console.log('Woof! Woof!');
    }
}

const dog: Animal = new Dog('dog1');
dog.bark();

export {}