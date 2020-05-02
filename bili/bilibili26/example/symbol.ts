const s = Symbol('name');

// symbol 作为属性值，有什么好处？
// 实现私有属性，私有方法
let prop = 'name';
const info = {
    [prop]: 'lisa',
    [s]: 'tom'
};
console.log(info.name);
console.log(info[s]);

// symbol 就不能被 for in, Object.keys 遍历了
console.log(Object.getOwnPropertySymbols(info));

// symbol 方法
const s2 = Symbol.for('name');
const s3 = Symbol.for('name');
// ts 貌似不够聪明, 下面返回 true，ts 还在报错
// @ts-ignore
console.log(s2 === s3);
// 有点意思，下面通过 getOwnPropertySymbols 方法拿到的，是一个 symbol，但是无法通过 keyFor 方法获取 symbol 的key
console.log(Object.getOwnPropertySymbols(info)[0]);
console.log(Symbol.keyFor(Object.getOwnPropertySymbols(info)[0]));

// ================================== //
// es6 暴露的 内部方法

// instanceof
const obj1 = {
    [Symbol.hasInstance](obj: any) {
        console.log(obj)
    }
};
console.log({z: 'zz'} instanceof (obj1 as any))

// 这一段，讲得不好，根本没说清楚
// species???
class Yo extends Array {
    constructor(...args: any[]) {
        super(...args);
    }
    // 去掉这个，下面的 a 就是 Yo 的实例？
    static get [Symbol.species]() {
        return Array;
    }
    getName() {
        return 'lisa';
    }
}
// 奇怪了，Array 可以接受多个参数，子类不行？
// 感觉 Array 重载的 构造函数没有被继承的样子？
// new Array([1, 2, 3]);
const y = new Yo(1, 2, 3);
const a = y.map(item => item + 1);
console.log(a);
console.log(y instanceof Yo);
console.log(a instanceof Yo);
console.log(a instanceof Array);

// match, replace, search, split
const obj2 = {
    [Symbol.match](str: string) {
        console.log(str.length);
    }
};

'abcde'.match(obj2 as RegExp);

// Iterator
// 可以给没有遍历器接口的对象，增加一个遍历器接口
let obj3 = {
    data: [1, 2, 3],
    *[Symbol.iterator]() {
        let i = 0;
        while (this.data[i] !== undefined) {
            yield this.data[i];
            ++i;
        }
    }
};

for (let i of obj3) {
    console.log(i);
}

// toPrimitive
let obj4 = {
    [Symbol.toPrimitive](hint: any) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error();
        }
    }
};
console.log(2 * (obj4 as any));
console.log(3 + (obj4 as any));
console.log((obj4 as any) == 'default');
console.log(String(obj4))

// Symbol.toStringTag 和 我们直接覆盖 Object 上的 toString 有啥区别？？
// 噢，是 toString 的 tag
let obj5 = {
    [Symbol.toStringTag]: 'pp'
};
console.log(Object.prototype.toString.call(obj5))

// Symbol.unscopables ??? 和 with？


export {}