class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} m`);
    }

    bark() {}
}

class Rhino extends Animal {
    constructor() {
        super('Rhino');
    }

    eat() {}
}

class Employee {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

// ok, since Rhino extends Animal
// animal = rhino;
// not ok, since Rhino might have some properties/methods that Animal doesn't have
// rhino = animal;

// ========================================== //\
// protected, readonly

class Person {
    protected readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

class Employee2 extends Person {
    private department: string;

    // 参数属性，最好写成类属性，清晰明了。
    constructor(name: string, department: string, readonly age: number) {
        super(name);
        this.department = department;
    }

    setName() {
        // throw an error, since name/age is readonly
        // this.name = 'shit'
        // this.age = 12;
    }

    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}

let howard = new Employee2('Howard', 'Sales', 37);
console.log(howard.getElevatorPitch());
// name is protected
// console.log(howard.name);

// throw an error, because person constructor is protected, interesting.
// new Person();

export {}
// stopped at p18