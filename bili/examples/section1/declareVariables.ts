// [number, number] !== number[]
// 元组，和数组 两个概念
let input: [number, number] = [1, 2];
function f([first, second]: [number, number]) {
    console.log(first, second);
}
f(input);

// deconstruct
// ???????????????????????????????????????????????????//
let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
};

// 直接支持对象的解构
// 但是貌似，解构的话，rest 的类型就很难搞了。。
// 嵌套对象类型，有点难搞哈
// let { a, ...rest }: { a: string } = o;
interface Test {
    [key:string]: any;
}
// ... not working, wtf
// let { a, ...rest }: { a: string, rest: Test } = o;
// 貌似，...rest 会包一层？
let { a, ...rest }: { a: string; b: number; c: string } = o;
console.log(`${a} - ${rest.b} - ${rest.c}`);

// default optional value
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// ? 函数声明
type C = { a: string, b?: number };
// default value
function f2({a, b = 0}: C = { a: 'default' }): void {

}

f2();
f2({ a: 'yes' });
// 报错，虽然给了 a 的默认值，但是类型 C 里要求提供 a 属性。有点意思，
// 那么上面的 f2 其实就写的不严谨，类型和默认值冲突了，说明设计有问题。
// f2({});

// 当我定义类型的时候，对象里的 逗号 和 分号有区别吗？感觉是一个效果
let object2: { a: string; b: number } = { a: '1', b: 10};
// spread
let object1 = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
let search = { ...object1, food: 12 };