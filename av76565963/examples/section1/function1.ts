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