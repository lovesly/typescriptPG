import { isPlainObject } from './utils';

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) return;
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
}

// any 太多是不是说明，有点问题呢
// 有没有特别好的参考，标准 ts？
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type');
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }

  return headers;
}