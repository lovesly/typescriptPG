import { AxiosRequestConfig } from './types/index';

// xmlhttprequest?? I thought axios is using fetch api?
export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config;
  // 可以看下源码和高程，肯定有向下兼容的实现
  // 另外，我们封装请求，好像大部分基于 fetch
  const request = new XMLHttpRequest();
  request.open(method.toUpperCase(), url, true);
  request.send(data);
}