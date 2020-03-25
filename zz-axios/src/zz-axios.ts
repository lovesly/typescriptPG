// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class DummyClass {

}

interface Test {
  name: string;
}

// Git 仓库嵌套的问题，如果内部，和外部的，指向两个不同的 remote origin，会怎么样？
const fn = ():void => {
  console.log('Shit')
}