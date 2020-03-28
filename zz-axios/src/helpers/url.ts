// ts 可以直接用 es6 module，忘了
import { isDate, isObject } from './utils';

function encode(val: string): string {
  // what?
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']');
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url;
  }

  const parts: string[] = [];
  for (let key of Object.keys(params)) {
    const val = params[key];
    if (val === null || typeof val === 'undefined') {
      continue;
    }
    let values = [];
    if (Array.isArray(val)) {
      values = val;
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((value) => {
      if (isDate(value)) {
        value = value.toISOString();
      } else if (isObject(value)) {
        // 这里肯定不行啊，循环引用怎么办
        value = JSON.stringify(value);
      }
      parts.push(`${encode(key)}=${encode(value)}`);
    });
  }

  let serializedParams = parts.join('&');
  if (serializedParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}