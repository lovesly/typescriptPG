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

// p18
let passcode = 'secret';
class Employee {
    private _fullName: string;
    constructor(name: string) {
        this._fullName = name;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode === 'secret') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}

let employee = new Employee('Bob');
employee.fullName = 'Bob Smith';
console.log(employee.fullName);

// static property
class Grid {
    static origin = {x: 0, y: 0};
    scale: number;
    constructor(scale: number) {
      this.scale = scale;
    }

    calDisFromOrigin(point: { x: number; y: number; }) {
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(2.0);

console.log(grid1.calDisFromOrigin({ x: 3, y: 3 }));
console.log(grid2.calDisFromOrigin({ x: 3, y: 3 }));

export {}