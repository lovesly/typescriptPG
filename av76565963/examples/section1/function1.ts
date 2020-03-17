let add: (value1: number, value2: number) => number = function(x: number, y: number): number {
  return x + y;
};

// 可以省略一边，自动推断出类型
let myAdd = (x: number, y: number): number => {
  return x + y;
}

// optional, default parameter
// 如何传递未知数量的参数呢？
function buildName(firstName: string, lastName?: string, ...rest: string[]) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
// stopped at p22
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  // 加不加这里的 this：Deck 都无所谓，有什么意义？后面再研究一哈
  createCardPicker: function(this: Deck) {
    // const that = this;
    // will this work??
    // return function() {
    return () => {
      let pickedCard = ~~(Math.random() * 52);
      let pickedSuit = ~~(Math.random() * 4);
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      }
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(pickedCard);



export {}