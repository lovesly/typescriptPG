// 普通函数
function add(arg1: number, arg2: number): number {
    return arg1 + arg2;
}
// es6 arrow function
const add2 = (arg1: number, arg2: number): number => arg1 + arg2; 

// ============= 函数类型
let add3: (x: number, y: number) => number
add3 = (arg1: number, arg2: number): number => arg1 + arg2;

interface Add {
    (x: number, y: number): number
}
// 推荐使用 类型别名？
type Add2 = (x: number, y: number) => number;

// 有点意思，那么如何不限定死呢？比如我只关注前两个参数类型？
let add4: Add2 = (arg1: number, arg2: number, arg3?: number) => arg1 + arg2 + (arg3 || 0)

// ============= 参数
const handleData = (arg1: number, ...args: any[]) => {

}

// 重载
// 意义是什么呢？java 里重载是两套实现，这里只是为了区分类型的话，为什么不直接使用联合类型？
function handleData1(x: string): string[]
function handleData1(x: number): number[]
function handleData1(x: any): any {
    if (typeof x === 'string') {
        return x.split('');
    } else if (typeof x === 'number') {
        return [x];
    } else {
        return x;
    }
}

export {}