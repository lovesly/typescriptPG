interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  // 指明 this 有什么区别？
  // 箭头函数可以既满足 UIElement 接口，又允许使用 this
  onClickBad = (e: Event) => {
    this.type = e.type;
  }
}

let h = new Handler('type1');
let element: UIElement = {
  addClickListener() {

  }
}

// throw an error. since this: Handler not match this: void
// h.onClickBad must match UIElement:addClickListener
// weird fucking code bro
element.addClickListener(h.onClickBad);

// ================================== //
// overload，我记得函数重载是要讲顺序的，越来越宽松？
// 这里应该是版本升级了，讲的和实际不一样。另外，缺失了部分内容，类型推论，兼容，命名空间，模块，迭代器生成器，Symbols，声明合并，JSX，装饰器
// 三斜线，Mixins，声明文件，都略过了。。。。
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number }
// unknown 可以啊，不影响上面两种重载的检测
function pickCard(x: unknown): any {
  if (Array.isArray(x)) {
    let pickedCard = ~~(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === 'number') {
    let pickedSuit = ~~(x/13);
    return { suit: '', card: x % 13 };
  }
}

pickCard([{suit: '', card: 3}]);
// throw an error
// pickCard()

export {}