// ========================================= //
// 类型推断，解释的不好，需要看看文档
let x = [0, 1, null];

class Animal {
  numLegs!: number;
  constructor() {

  }
}

class Bee extends Animal {

}

class Lion extends Animal {

}

let zoo = [new Bee(), new Lion()];

// 上下文类型？这个没看懂
// window.onmousedown = function(mouseEvent: any) {
//   console.log(mouseEvent.clickTime);
// }

// ========================================= //
// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
  let result = {} as T & U;
  // for in, for of, ..., Object.keys, Object.getOwnProperty
  // 这样可以跳过报错，那还有什么意义呢？？没看懂
  result = { ...first, ...second };
  // 这种写法会报错
  // Type 'T[Extract<keyof T, string>]' is not assignable to type '(T & U)[Extract<keyof T, string>]'
  // for (let id in first) {
  //   result[id] = first[id];
  // }
  return result;
}

// 这个例子给错了感觉，extend 是做了个实例属性合并
// 但是类的方法是在原型链上，感觉这个人水平有限。。。
class Person {
  constructor(public name: string) {

  }
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  log() {
    console.log('Shit')
  }
}

const testObj = new ConsoleLogger();
console.log(Object.keys(testObj));

const jim = extend(new Person('Jim'), testObj);
jim.name;
jim.log();

export {}