const toString = Object.prototype.toString;

// 谓词保护？没太懂其实，为什么不明确写成 as Date？
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

export function isObject(val: any): val is Object {
  return typeof val === 'object' && val !== null;
}