function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('myString');
// 类型推断？
let output2 = identity('myString');
// interesting
interface Lengthwise {
  length: number;
}
// 通过 extends 接口，给泛型添加约束
function loginIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型函数类型
let myIdentity: <T>(arg: T) => T = identity;
// ?? 对象字面量和接口是一个效果？？
interface GenericIdentityFn<T> {
  <T>(arg: T): T
}
// let myIdentity2: { <T>(arg: T): T } = identity;
let myIdentity2: GenericIdentityFn<number> = identity;

// ========================================= //
// generic class
// 静态属性不能使用泛型类型？实例属性可以
class GenericNumber<T> {
  zeroValue: T;
  // this will tell typescript to ignore the strictPropertyInitialization check for this property. 
  add!: (x: T, y: T) => T;
  constructor(val: T) {
    this.zeroValue = val;
  }
}

let myNumber = new GenericNumber<number>(10);
myNumber.zeroValue = 0;
myNumber.add = function(x, y) {
  return x + y;
}

let myString = new GenericNumber<string>('Yo');
myString.zeroValue = '0';
myString.add = function(x, y) {
  return `${x} - ${y}`;
}

// 牛逼了呀，约束
// 那么问题来了，除了 keyof 还有别的吗？
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface CType<T> {
  new(): T;
}

// 这个写法令人困惑
function create<T>(C: CType<T>): T {
  return new C();
}

// strictPropertyInitialization check is so annoying
class BeeKeeper {
  hasMask!: boolean;
}

class LionKeeper {
  nametag!: string;
}

class Animal {
  numLength!: number;
}

class Bee extends Animal {
  keeper!: BeeKeeper;
}

class Lion extends Animal {
  keeper!: LionKeeper;
}

// 另一种构造器写法？
// interface CType<T> {
//   new(): T;
// }
// 工厂函数
function createInstance<T extends Animal>(C: new() => T): T {
  return new C();
}

// 这里的类型推断，可以让编译器知道，返回的是个 Lion，Lion 有 nametag 这个属性
// hmmm。。。
const lion = createInstance(Lion)
lion.keeper.nametag;
lion.numLength;

createInstance(Bee).keeper.hasMask;

export {}