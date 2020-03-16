// abstract class
abstract class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log('Department name ' + this.name);
  }

  abstract printMetting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting'); 
  }

  printMetting(): void {
    console.log('Every morning');
  }

  generateReports() {

  }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMetting();
// throw an error, because Department does't have generateReports method.
// department.generateReports();

class Greeter {
  static standardGreeting = 'Hello, there';
  greeting: string | undefined;

  constructor(message?: string) {
    this.greeting = message;
  }
  
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter: Greeter;
greeter = new Greeter();
console.log(greeter.greet());

// what? 类的类型，实例的类型？？？这里稍微有点困惑
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there';

let greeter2: Greeter = new greeterMaker();

export {};