// number
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let biLiteral: number = 0b1010;
let octLiteral: number = 0o24;

// list
let list: number[] = [];
let listArr: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["1", 2];

// enum
enum Color {
    Red = 1,
    Green,
    Blue
}

let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName); // 'Green'

// any
let listAny: any[] = [1, true, 'free'];
listAny[3] = 'shit';

// void
function warnUser(): void {
    console.log('shit');
}

// undefined, null
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
    throw new Error(message);
}

// what is the type returned??
function fail(): object {
    return error('something wrong');
}

// declare??
declare function create(o: object | null | undefined): void;
create({ prop: 0 });
// not allowed, interesting, I thought 'no param' === 'undefined'
// create();

// 类型断言，中文翻译不好
let anyString: any = 'this is a string';
let strLength: number = (<string>anyString).length;
let strLength2: number = (anyString as string).length;