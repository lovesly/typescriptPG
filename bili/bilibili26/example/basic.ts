let bool: boolean;
bool = true;

let num: number = 123
num = 0b1101;
num = 0x7b;
num = 0o173;

let str: string;
str = "abc";

let arr: number[] = [1, 2, 3];
let arr2: Array<Number> = [2, 3, 4];
let arr3: (string | number)[] = ['a', 2, 3];

let tuple: [string, number, boolean];
tuple = ['a', 1, true];

enum Roles {
    SUPER_ADMIN = 1,
    ADMIN,
    USER,
}
console.log(Roles.USER);

// any

// void
const consoleTxt = (text: string): void => {
    console.log(text)
};

let v: void;
v = undefined;
// v = null;

// never
const errorFunc = (msg: string): never => {
    throw new Error(msg)
}

// object
let obj = {
    name: 'listen'
};
function getObject(obj: object): void {
    console.log(obj);
}

// 类型断言
// hack around...
// 自定义类型保护?
const getLength = (target: string | number): number => {
    if (typeof (target as string).length === 'number') {
        return (<string>target).length;
    } else {
        return target.toString().length;
    }
};


export {}

