// what's the difference between 'interface' and 'type' ??
// ==================================================== //
interface Label {
    label: string;
}

function printLabel(obj: Label) {
    console.log(obj.label);
}

let myObj = {
    size: 10,
    label: 'Size 10'
};

printLabel(myObj);

// ==================================================== //
// optional property
interface Square {
    color: string;
    area: number;   
}

interface SquareConfig {
    color?: string;
    width?: number;
    // [key: string]: any
}

function createSquare(config: SquareConfig = { color: 'balck', width: 0 }): Square {
    // 给默认参数有一个问题，就是 config 有可能为 undefined，类型检测会报错。。。
    const obj = { color: 'white', area: 100 };
    if (config.width) {
        obj.area = config.width * config.width;
    }
    return obj;
}

// 额外属性检查(e.g. colour), 跳过的方式
// [key: string]: any
// 或者把类型赋值给一个变量，这个是什么原理呢？
const squareOptions = { colour: 'black', width: 10 };
let mySquare = createSquare(squareOptions);

// ==================================================== //
// readonly
interface Point {
    readonly x: number;
    readonly y: number;
}

// only writable when initializing
let p1: Point = { x: 10, y: 20 };

let g: number[] = [1, 3, 2];
let ro: ReadonlyArray<number> = g;
// throw an error
// ro[0] = 12;

// ==================================================== //
// function type? function interface?
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// params order matters, not names
let mySearch: SearchFunc = (src: string, sub: string): boolean => {
    return src.search(sub) > -1;
}

// ==================================================== //
// 索引 index

interface StringArray {
    [index: number]: string
}

let myArray: StringArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];

// string, number index mixed
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

// interesting，和继承有关系，Animal 需要能够赋给Dog
interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}

// ?
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myStringArray: ReadonlyStringArray = ['1', '2'];
// myStringArray[0] = '1'

export {}