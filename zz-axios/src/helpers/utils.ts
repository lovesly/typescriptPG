const toString = Object.prototype.toString;

// 谓词保护？没太懂其实，为什么不明确写成 as Date？
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

export function isObject(val: any): val is Object {
  return typeof val === 'object' && val !== null;
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]';
}

// you think too much, this is the code to get simple object
export function isPlainObjectZ(val: any): val is Object {
  if (!isObject(val)) return false;

  let proto = Reflect.getPrototypeOf(val);
  while (proto != null) {
    proto = Reflect.getPrototypeOf(proto);
  }
  return proto === Reflect.getPrototypeOf(val);
}