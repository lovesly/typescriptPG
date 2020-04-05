function padLeft(value: string, padding: number | string) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  } else if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number type for padding, got ${typeof padding}`);
}

padLeft('Hello', ' ');

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  if (Math.random() > 0.5) {
    return {} as Fish;
  } else {
    return {} as Bird;
  }
}

let pet = getSmallPet();
pet.layEggs();
// 无法确定返回类型，所以都会报错。联合类型只能调用共有方法
// pet.fly();
// ================================== //
// 类型保护
// pet is Fish ?? what about 'boolean'
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}


if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

function padLeft2(value: string, padding: number | string) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  } else if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number type for padding, got ${typeof padding}`);
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof x === 'string';
}

// 除了 typeof，还有 instanceof 类型保护
// 在我看来更像是类型检查，恩。。。

// ================================== //
// null，undefined
// ? 版本问题， null，undefined 已经不能赋值给其他值了。
let s = 'foo';
// s = undefined;
let sn: string | null = 'bar';
sn = null;

function f(x: number, y?: number) {
  return x + (y || 0);
}

// 可选参数/属性 赋值 undefined 是可以的
f(1, undefined)
// throw an error
// f(1, null)

// ----------------------------------- //
class C {
  a!: number;
  b?:number;
}

let c = new C();
c.a = 12;
// c.a = undefined;
c.b = 13;
c.b = undefined;
// c.b = null;

// ---------------------------------- //
function broken(name: string | null): string {
  function postfix(epithet: string) {
    // 墨明其妙写出个这个东西，name?.charAt， 居然不报错
    // return name?.charAt(0) + '. the ' + epither;
    // ! means not null
    return name!.charAt(0) + '. the ' + epithet;
  }
  name = name || 'Bob';
  return postfix(name);
}

// =========================================== //
// 字符串字面量？？
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {

    } else if (easing === 'ease-out') {

    } else {

    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
// throw an error
// button.animate(0, 0, '');

export {}