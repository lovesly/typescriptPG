interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
    tick(): void;
}

// 构造器接口？？
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

// 实例接口/构造器接口？
// 报错
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) {
//         this.currentTime = new Date();
//     }

//     setTime(d: Date) {
//         this.currentTime = d;
//     }
// }

// factory??
// 这个不就是工厂模式吗？
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
    setTime() {

    }
    tick() {
        console.log('Beep')
    }
}

class AnalogClock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
    setTime() {

    }
    tick() {
        console.log('tick toc')
    }
}

let digital = createClock(DigitalClock, 12, 12);
let analog = createClock(AnalogClock, 12, 12);

// ================================================ //
// interafce inheritance
interface Shape {
    color: string;
}

interface PenStroke {
    width: number;
    color: string;
}

// 如果有重复属性呢？覆盖还是报错？
// non-consistent will throw an error
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = 'blue';
square.sideLength = 12;
square.width = 5.0;

// ================================================ //
// mixed type? 混合类型

interface Counter {
    // 匿名函数声明？
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    // 这是混合类型？？断言之后，即使把 interval，reset 注释掉也不会报错的？？
    // 感觉有点问题
    let counter = (function(start: number) {}) as Counter;

    counter.interval = 123;
    counter.reset = function() {};
    
    return counter;
}

// ================================================ //
// interface extends class, wow
class Control {
    private State: any;
}

interface SelectableControl extends Control {
    select(): string;
}

// 眼花缭乱。。。
class Button extends Control implements SelectableControl {
    select() {
        return '';
    }
}

class TextBox extends Control {
    // 这个没实现 select 接口，所以这个 select 可以随便写和 select 接口内的方法不一样
    select() {
        return 12;
    }
}

// throw an error, because when an interface extends a class, 
// it will inheritance the private properties, e.g State in this example
// 人话就是，当某个类 a 想实现一个继承了某个类 b 的接口的时候，a 必须为 b 的子类

// class ImageC implements SelectableControl {
//     select() {
//         return '';
//     }
// }

export {}
