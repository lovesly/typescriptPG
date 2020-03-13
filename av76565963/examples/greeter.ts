class User {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

// 可以多，不可以少？
let user: Person = new User('Z', 'S');

console.log(greeter(user));
// stopped at p4

export {}